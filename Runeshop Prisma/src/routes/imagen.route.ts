import { ImagenController } from '../controllers/imagen.controller.js';
import { BaseRouter } from './base.route.js';

const imagenController = new ImagenController();
export const imagenRouter = BaseRouter(imagenController);