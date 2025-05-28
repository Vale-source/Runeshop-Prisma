import { Detalle, Talle } from "../generated/prisma/index.js";

type CleanDetalle = Omit<Detalle, "talle" | "talle_id">
type CleanTalle = Omit<Talle, "detalles">

export type TypeGetTalle = CleanTalle & {
	detalle: CleanDetalle
}

export type TypePostTalle = Omit<CleanTalle, "id">