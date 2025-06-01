import { Imagen } from "../generated/prisma/index.js";

export type TypeGetImagen = Imagen

export type TypePostImagen = Omit<Imagen, "id">