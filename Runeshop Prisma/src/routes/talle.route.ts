import { TalleController } from '../controllers/talle.controller.js';
import { BaseRouter } from './base.route.js';

const talleController = new TalleController();
export const talleRouter = BaseRouter(talleController);