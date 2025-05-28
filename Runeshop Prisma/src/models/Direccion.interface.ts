import { Direccion, Usuario, UsuarioDireccion } from "../generated/prisma/index.js"

type UsuariosSinDireccion = Omit<Usuario, "usuario_direccion">

type UsuarioDireccionExtend = Omit<UsuarioDireccion, "direccion_id" | "direccion"> & {
	usuario: UsuariosSinDireccion
}

export type TypeGetDireccion = Omit<Direccion, "usuario_direccion"> & {
	usuario_direccion: UsuarioDireccionExtend[]
}

export type TypePostDireccion = Omit<Direccion, "id" | "usuario_direccion">