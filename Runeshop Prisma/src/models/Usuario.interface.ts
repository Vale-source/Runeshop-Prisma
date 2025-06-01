import { Direccion, Usuario, UsuarioDireccion } from "@prisma/client";

type DireccionSinUsuarios = Omit<Direccion, "usuario_direccion">

type UsuarioDireccionExtend = Omit<UsuarioDireccion, "usuario_id" | "usuario"> & {
	direccion: DireccionSinUsuarios
}

export type TypeGetUsuario = Omit<Usuario, "usuario_direccion"> & {
	usuario_direccion: UsuarioDireccionExtend[]
}

export type TypePostUsuario = Omit<Usuario, "id" | "usuario_direccion">
