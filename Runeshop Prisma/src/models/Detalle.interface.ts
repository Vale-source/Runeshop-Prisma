import { Descuento, Detalle, Imagen, Precio, Producto, Talle } from "../generated/prisma/index.js";

type CleanDescuento = Omit<Descuento, "detalles">
type CleanProducto = Omit<Producto, "detalles">
type CleanTalle = Omit<Talle, "detalles">
type CleanPrecio = Omit<Precio, "detalles">
type CleanDetalle = Omit<Detalle, "descuento" | "producto" | "talle" | "precio" | "ordenCompra" | "imagenes">
type CleanIDs = Omit<CleanDetalle, "descuento_id" | "producto_id" | "talle_id" | "precio_id">

export type TypeGetDetalle = CleanIDs & {
	descuento: CleanDescuento,
	producto: CleanProducto,
	talle: CleanTalle,
	precio: CleanPrecio,
}

export type TypePostDetalle = Omit<CleanDetalle, "id">