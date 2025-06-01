import { Request, Response } from 'express';
import { BaseService } from '../services/base.service.js';

export class BaseController<T, CreateT> {
	protected service: BaseService<T, CreateT>;

	constructor(service: BaseService<T, CreateT>) {
		this.service = service;
	}

	findAll = async (req: Request, res: Response) => {
		try {
			const result = await this.service.findAll();
			res.json(result);
		} catch (err) {
			res.status(500).json({ error: (err as Error).message });
		}
	};

	findOne = async (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const result = await this.service.findOne(id);
			res.json(result);
		} catch (err) {
			res.status(500).json({ error: (err as Error).message });
		}
	};

	create = async (req: Request, res: Response) => {
		try {
			const data: CreateT = req.body;
			const result = await this.service.create(data);
			res.status(201).json(result);
		} catch (err) {
			res.status(500).json({ error: (err as Error).message });
		}
	};

	update = async (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const data: CreateT = req.body;
			const result = await this.service.update(id, data);
			res.json(result);
		} catch (err) {
			res.status(500).json({ error: (err as Error).message });
		}
	};

	delete = async (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const result = await this.service.delete(id);
			res.json(result);
		} catch (err) {
			res.status(500).json({ error: (err as Error).message });
		}
	};
}
