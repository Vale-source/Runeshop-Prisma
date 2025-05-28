import { Descuento, Detalle } from "../generated/prisma/index.js";

type CleanDetalle = Omit<Detalle, "descuento" | "descuento_id">
type CleanDescuento = Omit<Descuento, "detalles">

export type TypeGetDescuento = CleanDescuento & {
	detalle: CleanDetalle
}

export type TypePostDescuento = Omit<CleanDescuento, "id">