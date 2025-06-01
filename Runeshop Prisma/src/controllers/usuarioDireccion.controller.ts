import { BaseController } from './base.controller.js';
import {
	TypeGetUsuarioDireccion
} from '../models/UsuarioDireccion.interface.js';
import { UsuarioDireccionService } from '../services/usuarioDireccion.service.js';

export class UsuarioDireccionController extends BaseController<
	TypeGetUsuarioDireccion,
	null
> {
	constructor() {
		super(new UsuarioDireccionService());
	}
}
