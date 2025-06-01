import { BaseService } from './base.service.js';
import {
    TypeGetPrecio,
    TypePostPrecio,
} from '../models/Precio.interface.js';

export class PrecioService extends BaseService<
    TypeGetPrecio,
    TypePostPrecio
> {
    constructor() {
        super('precio');
    }
}