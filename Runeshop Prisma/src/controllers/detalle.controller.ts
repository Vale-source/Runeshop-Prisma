import { BaseController } from './base.controller.js';
import { TypeGetDetalle, TypePostDetalle } from '../models/Detalle.interface.js';
import { DetalleService } from '../services/detalle.service.js';

export class DetalleController extends BaseController<TypeGetDetalle, TypePostDetalle> {
  constructor() {
    super(new DetalleService());
  }
}