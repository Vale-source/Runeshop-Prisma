import { Categoria, Producto } from "@prisma/client";

export type CleanProducto = Omit<Producto, "categoria_id">
type CleanCategoria = Omit<Categoria, "producto">

export type TypeGetCategoria = CleanCategoria & {
	producto: CleanProducto
}

export type TypePostCategoria = Omit<CleanCategoria, "id">