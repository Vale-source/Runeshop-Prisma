/*
  Warnings:

  - You are about to drop the column `decuento_id` on the `Detalle` table. All the data in the column will be lost.
  - Added the required column `descuento_id` to the `Detalle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Detalle" DROP CONSTRAINT "Detalle_decuento_id_fkey";

-- AlterTable
ALTER TABLE "Detalle" DROP COLUMN "decuento_id",
ADD COLUMN     "descuento_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Detalle" ADD CONSTRAINT "Detalle_descuento_id_fkey" FOREIGN KEY ("descuento_id") REFERENCES "Descuento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
