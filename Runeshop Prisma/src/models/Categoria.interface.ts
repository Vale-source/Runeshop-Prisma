import { Categoria, Producto } from "../generated/prisma/index.js";

export type CleanProducto = Omit<Producto, "categoria_id">
type CleanCategoria = Omit<Categoria, "producto">

export type TypeGetCategoria = CleanCategoria & {
	producto: CleanProducto
}

export type TypePostCategoria = Omit<CleanCategoria, "id">