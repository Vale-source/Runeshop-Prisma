-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Marca" AS ENUM ('ADIDAS', 'NIKE', 'REEBOK', 'PUMA');

-- CreateEnum
CREATE TYPE "TipoProducto" AS ENUM ('ZAPATILLA', 'REMERA', 'CAMPERA', 'BOTIN');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "rol" "Role" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "id" SERIAL NOT NULL,
    "localidad" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDireccion" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "direccion_id" INTEGER NOT NULL,

    CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenCompra" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "fechaCompra" TIMESTAMP(3) NOT NULL,
    "usuario_direccion_id" INTEGER NOT NULL,

    CONSTRAINT "OrdenCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detalle" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "marca" "Marca" NOT NULL,
    "stock" INTEGER NOT NULL,
    "precioDescuento" DECIMAL(65,30) NOT NULL,
    "inicioDescuento" TIMESTAMP(3) NOT NULL,
    "finDescuento" TIMESTAMP(3) NOT NULL,
    "descuento_id" INTEGER NOT NULL,
    "producto_id" INTEGER NOT NULL,
    "talle_id" INTEGER NOT NULL,
    "precio_id" INTEGER NOT NULL,

    CONSTRAINT "Detalle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "tipoProducto" "TipoProducto" NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descuento" (
    "id" SERIAL NOT NULL,
    "porcentaje" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Descuento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talle" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Talle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Precio" (
    "id" SERIAL NOT NULL,
    "precioCompra" DECIMAL(65,30) NOT NULL,
    "precioVenta" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Precio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagen" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,

    CONSTRAINT "Imagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ordenCompra_detalle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ordenCompra_detalle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_detalle_imagen" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_detalle_imagen_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "_ordenCompra_detalle_B_index" ON "_ordenCompra_detalle"("B");

-- CreateIndex
CREATE INDEX "_detalle_imagen_B_index" ON "_detalle_imagen"("B");

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_direccion_id_fkey" FOREIGN KEY ("direccion_id") REFERENCES "Direccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_usuario_direccion_id_fkey" FOREIGN KEY ("usuario_direccion_id") REFERENCES "UsuarioDireccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_descuento_id_fkey" FOREIGN KEY ("descuento_id") REFERENCES "Descuento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_talle_id_fkey" FOREIGN KEY ("talle_id") REFERENCES "Talle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_precio_id_fkey" FOREIGN KEY ("precio_id") REFERENCES "Precio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ordenCompra_detalle" ADD CONSTRAINT "_ordenCompra_detalle_A_fkey" FOREIGN KEY ("A") REFERENCES "Detalle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ordenCompra_detalle" ADD CONSTRAINT "_ordenCompra_detalle_B_fkey" FOREIGN KEY ("B") REFERENCES "OrdenCompra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_detalle_imagen" ADD CONSTRAINT "_detalle_imagen_A_fkey" FOREIGN KEY ("A") REFERENCES "Detalle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_detalle_imagen" ADD CONSTRAINT "_detalle_imagen_B_fkey" FOREIGN KEY ("B") REFERENCES "Imagen"("id") ON DELETE CASCADE ON UPDATE CASCADE;
