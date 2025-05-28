import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const filtroProducto = () => {
	return prisma
}