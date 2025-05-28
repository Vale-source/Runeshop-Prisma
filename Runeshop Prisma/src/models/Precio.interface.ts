import { Detalle, Precio } from "../generated/prisma/index.js";

type CleanDetalle = Omit<Detalle, "precio" | "precio_id">
type CleanPrecio = Omit<Precio, "detalles">

export type TypeGetPrecio = CleanPrecio & {
	detalles: CleanDetalle
}

export type TypePostPrecio = Omit<CleanPrecio, "id">