/*
  Warnings:

  - You are about to drop the column `usuario_direccion_id` on the `OrdenCompra` table. All the data in the column will be lost.
  - The primary key for the `UsuarioDireccion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UsuarioDireccion` table. All the data in the column will be lost.
  - Added the required column `direccion_id` to the `OrdenCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `OrdenCompra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrdenCompra" DROP CONSTRAINT "OrdenCompra_usuario_direccion_id_fkey";

-- AlterTable
ALTER TABLE "OrdenCompra" DROP COLUMN "usuario_direccion_id",
ADD COLUMN     "direccion_id" INTEGER NOT NULL,
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UsuarioDireccion" DROP CONSTRAINT "UsuarioDireccion_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("usuario_id", "direccion_id");

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_usuario_id_direccion_id_fkey" FOREIGN KEY ("usuario_id", "direccion_id") REFERENCES "UsuarioDireccion"("usuario_id", "direccion_id") ON DELETE RESTRICT ON UPDATE CASCADE;
