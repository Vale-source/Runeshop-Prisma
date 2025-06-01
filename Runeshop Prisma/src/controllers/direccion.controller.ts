import { BaseController } from './base.controller.js';
import {
	TypeGetDireccion,
	TypePostDireccion,
} from '../models/Direccion.interface.js';
import { DireccionService } from '../services/direccion.service.js';

export class DireccionController extends BaseController<
	TypeGetDireccion,
	TypePostDireccion
> {
	constructor() {
		super(new DireccionService());
	}
}
