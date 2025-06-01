import { PrecioController } from '../controllers/precio.controller.js';
import { BaseRouter } from './base.route.js';

const precioController = new PrecioController();
export const precioRouter = BaseRouter(precioController);