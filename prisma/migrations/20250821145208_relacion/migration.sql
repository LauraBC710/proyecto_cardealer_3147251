/*
  Warnings:

  - Added the required column `usuario_id` to the `tareas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tareas` ADD COLUMN `usuario_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tareas` ADD CONSTRAINT `tareas_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
