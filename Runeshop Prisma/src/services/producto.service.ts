import { BaseService } from './base.service.js';
import {
	TypeGetProducto,
	TypePostProducto,
} from '../models/Producto.interface.js';

export class ProductoService extends BaseService<
	TypeGetProducto,
	TypePostProducto
> {
	constructor() {
		super('producto');
	}
}
