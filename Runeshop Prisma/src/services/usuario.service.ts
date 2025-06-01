import { BaseService } from './base.service.js';
import {
    TypeGetUsuario,
    TypePostUsuario,
} from '../models/Usuario.interface.js';

export class UsuarioService extends BaseService<
    TypeGetUsuario,
    TypePostUsuario
> {
    constructor() {
        super('usuario');
    }
}