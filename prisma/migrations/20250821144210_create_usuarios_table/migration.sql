-- CreateTable
CREATE TABLE `usuarios` (
    `usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_nombre` VARCHAR(191) NOT NULL,
    `usuario_apellido` VARCHAR(191) NOT NULL,
    `usuario_correo` VARCHAR(191) NOT NULL,
    `usuario_contrasena` VARCHAR(191) NOT NULL,
    `usuario_telefono` VARCHAR(191) NOT NULL,
    `usuario_preferencia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
