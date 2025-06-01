import { Request, Response } from 'express';
import {
    comparePasswords,
    hashPassword,
} from '../services/password.service.js';
import { PrismaClient } from '@prisma/client';
import { generarToken } from '../services/auth.service.js';

const prisma = new PrismaClient();

export const register = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { nombre, apellido, email, nombre_usuario, contraseña, rol } = req.body;
    try {
        if (!nombre || !apellido || !email || !nombre_usuario || !contraseña || !rol) {
            res.status(400).json({ message: 'Faltan campos obligatorios' });
            return;
        }
        const hashedPasword = await hashPassword(contraseña);
        const user = await prisma.usuario.create({
            data: {
                nombre,
                apellido,
                email,
                nombre_usuario,
                contraseña: hashedPasword,
                rol,
            },
        });
        const token = generarToken(user);
        res.status(201).json(token);
    } catch (err: any) {
        if (err?.code === 'P2002' && err?.meta?.target?.includes('email')) {
            res.status(400).json({ message: 'El email ingresado ya existe' });
            return;
        }
        console.log(err);
        res.status(500).json({ error: 'hubo un error en el register', err });
    }
};
export const login = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const { email, contraseña } = req.body;

	try {
		if (!email) {
			res.status(400).json({ message: 'El email es obligatorio' });
			return;
		}
		if (!contraseña) {
			res.status(400).json({ message: 'La contraseña es obligatorio' });
			return;
		}

        const user = await prisma.usuario.findUnique({ where: { email } });
		if (!user) {
			res.status(404).json({ error: 'Usuario no encontrado' });
			return;
		}

        const passwordMatch = await comparePasswords(contraseña, user.contraseña);
		if (!passwordMatch) {
			res
				.status(401)
				.json({ error: 'Usuario y contraseñas no coinciden' });
		}

		const token = generarToken(user);
		res.status(200).json({ token });
	} catch (error: any) {
		console.log('Error: ', error);
	}
};
