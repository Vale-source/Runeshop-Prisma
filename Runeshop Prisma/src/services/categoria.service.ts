import { BaseService } from './base.service.js';
import {
	TypeGetCategoria,
	TypePostCategoria,
} from '../models/Categoria.interface.js';

export class CategoriaService extends BaseService<
	TypeGetCategoria,
	TypePostCategoria
> {
	constructor() {
		super('categoria');
	}
}
