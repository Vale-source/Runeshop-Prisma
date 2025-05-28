import { Detalle, OrdenCompra, UsuarioDireccion } from "../generated/prisma/index.js";

type CleanUsuarioDireccion = Omit<UsuarioDireccion, "ordenCompra">
type CleanDetalles = Omit<Detalle, "ordenCompra">
type CleanOrdenCompra = Omit<OrdenCompra, "usuario_direccion_id"| "usuario_direccion" | "detalles">


export type TypeGetOrdenCompra =CleanOrdenCompra & {
	detalles: CleanDetalles[],
	usuario_direccion: CleanUsuarioDireccion
}


export type TypePostOrdenCompra = Omit<OrdenCompra, "id" | "usuario_direccion" | "detalles">