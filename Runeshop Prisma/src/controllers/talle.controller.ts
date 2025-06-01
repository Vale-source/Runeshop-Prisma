import { BaseController } from './base.controller.js';
import { TypeGetTalle, TypePostTalle } from '../models/Talle.interface.js';
import { TalleService } from '../services/talle.service.js';

export class TalleController extends BaseController<
	TypeGetTalle,
	TypePostTalle
> {
	constructor() {
		super(new TalleService());
	}
}
