import { DetalleController } from '../controllers/detalle.controller.js';
import { BaseRouter } from './base.route.js';

const detalleController = new DetalleController();
export const detalleRouter = BaseRouter(detalleController);
