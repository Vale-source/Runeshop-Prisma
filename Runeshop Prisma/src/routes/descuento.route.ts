import { DescuentoController } from '../controllers/descuento.controller.js';
import { BaseRouter } from './base.route.js';

const descuentoController = new DescuentoController();
export const descuentoRouter = BaseRouter(descuentoController);