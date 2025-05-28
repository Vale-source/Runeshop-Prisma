import { Direccion, OrdenCompra, Usuario, UsuarioDireccion } from "../generated/prisma/index.js";

type CleanUsuarioDireccion = Omit<UsuarioDireccion, "usuario_id" | "usuario" | "direccion" | "direccion_id">
type CleanUsuario = Omit<Usuario, "usuario_direccion">
type CleanDireccion = Omit<Direccion, "usuario_direccion">

type UsuarioDireccionExtend = CleanUsuarioDireccion & {
	usuario: CleanUsuario,
	direccion: CleanDireccion
}

export type TypeGetUsuarioDireccion = Omit<UsuarioDireccionExtend, "ordenCompra"> & {
	ordenCompra: Omit<OrdenCompra, "usuario_direccion_id">[],
}

