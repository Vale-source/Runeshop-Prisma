import { UsuarioDireccionController } from '../controllers/usuarioDireccion.controller.js';
import { BaseRouter } from './base.route.js';

const usuarioDireccionController = new UsuarioDireccionController();
export const usuarioDireccionRouter = BaseRouter(usuarioDireccionController);