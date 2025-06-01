import { Detalle, Talle } from "@prisma/client";

type CleanDetalle = Omit<Detalle, "talle" | "talle_id">
type CleanTalle = Omit<Talle, "detalles">

export type TypeGetTalle = CleanTalle & {
	detalle: CleanDetalle
}

export type TypePostTalle = Omit<CleanTalle, "id">