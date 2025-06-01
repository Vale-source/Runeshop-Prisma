import { BaseController } from './base.controller.js';
import {
	TypeGetOrdenCompra,
	TypePostOrdenCompra,
} from '../models/OrdenCompra.interface.js';
import { OrdenCompraService } from '../services/ordenCompra.service.js';

export class OrdenCompraController extends BaseController<
	TypeGetOrdenCompra,
	TypePostOrdenCompra
> {
	constructor() {
		super(new OrdenCompraService());
	}
}
