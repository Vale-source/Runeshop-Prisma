import express from 'express';
import { detalleRouter } from './routes/detalle.route.js';
import { productoRoute } from './routes/producto.route.js';
import { categoriaRouter } from './routes/categoria.route.js';
import { descuentoRouter } from './routes/descuento.route.js';
import { direccionRouter } from './routes/direccion.route.js';
import { imagenRouter } from './routes/imagen.route.js';
import { ordenCompraRouter } from './routes/ordenCompra.route.js';
import { precioRouter } from './routes/precio.route.js';
import { talleRouter } from './routes/talle.route.js';
import { usuarioRouter } from './routes/usuario.route.js';
import { usuarioDireccionRouter } from './routes/usuarioDireccion.route.js';

const app = express();

app.use(express.json());

app.use('/detalles', detalleRouter);
app.use('/productos', productoRoute);
app.use('/categorias', categoriaRouter);
app.use('/descuentos', descuentoRouter);
app.use('/direcciones', direccionRouter);
app.use('/imagenes', imagenRouter);
app.use('/ordenes-compra', ordenCompraRouter);
app.use('/precios', precioRouter);
app.use('/talles', talleRouter);
app.use('/usuarios', usuarioRouter);
app.use('/usuarios-direccion', usuarioDireccionRouter);

app.use(
    (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        console.error(err);
        res
            .status(500)
            .json({ error: err.message || 'Error interno del servidor' });
    },
);

export default app;