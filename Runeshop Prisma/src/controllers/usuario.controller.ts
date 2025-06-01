import { BaseController } from './base.controller.js';
import {
	TypeGetUsuario,
	TypePostUsuario,
} from '../models/Usuario.interface.js';
import { UsuarioService } from '../services/usuario.service.js';

export class UsuarioController extends BaseController<
	TypeGetUsuario,
	TypePostUsuario
> {
	constructor() {
		super(new UsuarioService());
	}
}
