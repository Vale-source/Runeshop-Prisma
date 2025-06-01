import { BaseController } from './base.controller.js';
import {
	TypeGetImagen,
	TypePostImagen,
} from '../models/Imagen.interface.js';
import { ImagenService } from '../services/imagen.service.js';

export class ImagenController extends BaseController<
	TypeGetImagen,
	TypePostImagen
> {
	constructor() {
		super(new ImagenService());
	}
}
