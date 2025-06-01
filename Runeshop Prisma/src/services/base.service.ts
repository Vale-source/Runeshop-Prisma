import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ModelName = {
	[K in keyof PrismaClient]: PrismaClient[K] extends { findMany: Function }
		? K
		: never;
}[keyof PrismaClient];

export class BaseService<T, CreateT> {
	protected model: any;

	constructor(modelName: ModelName) {
		const model = prisma[modelName];
		if (!model || typeof model.findMany !== 'function')
			throw new Error(
				`Modelo ${String(
					modelName,
				)} no encontrado o no es un modelo de Prisma`,
			);
		this.model = model;
	}

	async findAll(): Promise<T[]> {
		return this.model.findMany();
	}

	async findOne(id: number): Promise<T> {
		return this.model.findUnique({ where: { id } });
	}

	async create(data: CreateT): Promise<T> {
		return this.model.create({ data });
	}

	async update(id: number, data: CreateT): Promise<T> {
		return this.model.update({ where: { id }, data });
	}

	async delete(id: number): Promise<T> {
		return this.model.delete({ where: { id } });
	}
}
