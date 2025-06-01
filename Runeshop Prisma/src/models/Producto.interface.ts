import { Categoria, Detalle, Producto } from "@prisma/client";



type CleanCategoria = Omit<Categoria, "producto">
type CleanDetalle = Omit<Detalle, "producto" | "producto_id">
type CleanProducto = Omit<Producto, "categoria" | "categoria_id" | "detalles">

export type TypeGetProducto = CleanProducto & {
	categoria: CleanCategoria,
	detalle: CleanDetalle
}

export type TypePostProducto = Omit<Producto, "id">