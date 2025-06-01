import { Detalle, Precio } from "@prisma/client";

type CleanDetalle = Omit<Detalle, "precio" | "precio_id">
type CleanPrecio = Omit<Precio, "detalles">

export type TypeGetPrecio = CleanPrecio & {
	detalles: CleanDetalle
}

export type TypePostPrecio = Omit<CleanPrecio, "id">