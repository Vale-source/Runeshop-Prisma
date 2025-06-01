import { BaseService } from './base.service.js';
import {
    TypeGetImagen,
    TypePostImagen,
} from '../models/Imagen.interface.js';

export class ImagenService extends BaseService<
    TypeGetImagen,
    TypePostImagen
> {
    constructor() {
        super('imagen');
    }
}