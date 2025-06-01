import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from '../controllers/base.controller.js';

export function BaseRouter<T, CreateT>(
	controller: BaseController<T, CreateT>,
) {
	const router = Router();

	const asyncHandler = (
		fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
	) => {
		return (req: Request, res: Response, next: NextFunction) =>
			Promise.resolve(fn(req, res, next)).catch(next);
	};

	router.get('/all', asyncHandler(controller.findAll));
	router.get('/:id', asyncHandler(controller.findOne));
	router.post('/post', asyncHandler(controller.create));
	router.put('/:id', asyncHandler(controller.update));
	router.delete('/:id', asyncHandler(controller.delete));

	return router;
}
