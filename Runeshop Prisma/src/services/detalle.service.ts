import { BaseService } from './base.service.js';
import {
	TypeGetDetalle,
	TypePostDetalle,
} from '../models/Detalle.interface.js';

export class DetalleService extends BaseService<
	TypeGetDetalle,
	TypePostDetalle
> {
	constructor() {
		super('detalle');
	}
}
