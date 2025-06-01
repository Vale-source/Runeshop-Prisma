import { DireccionController } from '../controllers/direccion.controller.js';
import { BaseRouter } from './base.route.js';

const direccionController = new DireccionController();
export const direccionRouter = BaseRouter(direccionController);