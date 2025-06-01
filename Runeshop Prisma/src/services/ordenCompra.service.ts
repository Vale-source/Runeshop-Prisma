import { BaseService } from './base.service.js';
import {
    TypeGetOrdenCompra,
    TypePostOrdenCompra,
} from '../models/OrdenCompra.interface.js';

export class OrdenCompraService extends BaseService<
    TypeGetOrdenCompra,
    TypePostOrdenCompra
> {
    constructor() {
        super('ordenCompra');
    }
}