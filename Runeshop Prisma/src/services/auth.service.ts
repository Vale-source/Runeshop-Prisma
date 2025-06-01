import jwt from 'jsonwebtoken';
import { TypePostUsuario } from '../models/Usuario.interface.js';

const JWT_SECRET: string = process.env.JWT_SECRET || 'default-secret';

export const generarToken = (user: TypePostUsuario): string => {
	return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
};
