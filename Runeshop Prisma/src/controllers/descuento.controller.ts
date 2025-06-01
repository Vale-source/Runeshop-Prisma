import { BaseController } from './base.controller.js';
import {
	TypeGetDescuento,
	TypePostDescuento,
} from '../models/Descuento.interface.js';
import { DescuentoService } from '../services/descuento.service.js';

export class DescuentoController extends BaseController<
	TypeGetDescuento,
	TypePostDescuento
> {
	constructor() {
		super(new DescuentoService());
	}
}
