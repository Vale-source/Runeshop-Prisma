import { BaseController } from './base.controller.js';
import {
	TypeGetProducto,
	TypePostProducto,
} from '../models/Producto.interface.js';
import { ProductoService } from '../services/producto.service.js';

export class ProductoController extends BaseController<
	TypeGetProducto,
	TypePostProducto
> {
	constructor() {
		super(new ProductoService());
	}
}
