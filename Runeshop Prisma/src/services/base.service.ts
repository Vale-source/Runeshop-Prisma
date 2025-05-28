import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ModelName = keyof PrismaClient;
type ModelType<K extends ModelName> = PrismaClient[K];

const getModel = <K extends ModelName>(modelName: K): ModelType<K> => {
	const model = prisma[modelName];
	if (!model) throw new Error(`Modelo ${String(modelName)} no encontrado`);
	return model;
};
