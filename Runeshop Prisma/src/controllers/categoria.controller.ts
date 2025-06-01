import { BaseController } from './base.controller.js';
import {
	TypeGetCategoria,
	TypePostCategoria,
} from '../models/Categoria.interface.js';
import { CategoriaService } from '../services/categoria.service.js';

export class CategoriaController extends BaseController<
	TypeGetCategoria,
	TypePostCategoria
> {
	constructor() {
		super(new CategoriaService());
	}
}
