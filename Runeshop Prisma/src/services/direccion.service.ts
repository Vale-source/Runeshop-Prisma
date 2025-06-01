import { BaseService } from './base.service.js';
import {
    TypeGetDireccion,
    TypePostDireccion,
} from '../models/Direccion.interface.js';

export class DireccionService extends BaseService<
    TypeGetDireccion,
    TypePostDireccion
> {
    constructor() {
        super('direccion');
    }
}