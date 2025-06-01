import { Imagen } from "@prisma/client";

export type TypeGetImagen = Imagen

export type TypePostImagen = Omit<Imagen, "id">