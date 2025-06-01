import { OrdenCompraController } from '../controllers/ordenCompra.controller.js';
import { BaseRouter } from './base.route.js';

const ordenCompraController = new OrdenCompraController();
export const ordenCompraRouter = BaseRouter(ordenCompraController);