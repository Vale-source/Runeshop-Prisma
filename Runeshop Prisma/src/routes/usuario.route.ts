import { UsuarioController } from '../controllers/usuario.controller.js';
import { BaseRouter } from './base.route.js';

const usuarioController = new UsuarioController();
export const usuarioRouter = BaseRouter(usuarioController);