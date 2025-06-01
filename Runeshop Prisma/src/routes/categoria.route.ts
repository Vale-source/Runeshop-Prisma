import { CategoriaController } from '../controllers/categoria.controller.js';
import { BaseRouter } from './base.route.js';

const categoriaController = new CategoriaController();
export const categoriaRouter = BaseRouter(categoriaController);