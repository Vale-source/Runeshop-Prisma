import { BaseService } from './base.service.js';
import {
    TypeGetTalle,
    TypePostTalle,
} from '../models/Talle.interface.js';

export class TalleService extends BaseService<
    TypeGetTalle,
    TypePostTalle
> {
    constructor() {
        super('talle');
    }
}