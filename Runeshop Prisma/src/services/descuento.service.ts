import { BaseService } from './base.service.js';
import {
	TypeGetDescuento,
	TypePostDescuento,
} from '../models/Descuento.interface.js';

export class DescuentoService extends BaseService<
	TypeGetDescuento,
	TypePostDescuento
> {
	constructor() {
		super('descuento');
	}
}
