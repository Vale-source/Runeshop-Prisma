import { ProductoController } from '../controllers/producto.controller.js';
import { BaseRouter } from './base.route.js';

const productoController = new ProductoController();
export const productoRoute = BaseRouter(productoController);
