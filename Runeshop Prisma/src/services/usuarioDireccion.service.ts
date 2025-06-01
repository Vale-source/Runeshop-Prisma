import { BaseService } from './base.service.js';
import {
    TypeGetUsuarioDireccion
} from '../models/UsuarioDireccion.interface.js';

export class UsuarioDireccionService extends BaseService<
    TypeGetUsuarioDireccion,
	null
> {
    constructor() {
        super('usuarioDireccion');
    }
}