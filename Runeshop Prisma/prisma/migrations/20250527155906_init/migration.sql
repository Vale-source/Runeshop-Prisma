/*
  Warnings:

  - You are about to drop the column `direccion_id` on the `OrdenCompra` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `OrdenCompra` table. All the data in the column will be lost.
  - The primary key for the `UsuarioDireccion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `usuario_direccion_id` to the `OrdenCompra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrdenCompra" DROP CONSTRAINT "OrdenCompra_usuario_id_direccion_id_fkey";

-- AlterTable
ALTER TABLE "OrdenCompra" DROP COLUMN "direccion_id",
DROP COLUMN "usuario_id",
ADD COLUMN     "usuario_direccion_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UsuarioDireccion" DROP CONSTRAINT "UsuarioDireccion_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_usuario_direccion_id_fkey" FOREIGN KEY ("usuario_direccion_id") REFERENCES "UsuarioDireccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
