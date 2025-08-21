import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TareasModule } from './tareas/tareas.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [UsuariosModule, TareasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
