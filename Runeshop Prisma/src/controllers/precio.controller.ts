import { BaseController } from './base.controller.js';
import {
	TypeGetPrecio,
	TypePostPrecio,
} from '../models/Precio.interface.js';
import { PrecioService } from '../services/precio.service.js';

export class PrecioController extends BaseController<
	TypeGetPrecio,
	TypePostPrecio
> {
	constructor() {
		super(new PrecioService());
	}
}
