import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {

  constructor(
    private prisma: PrismaService
  ) {}
  
  async create(body:any) {
    return await this.prisma.usuarios.create({
      data: body
    })
  }

  async findAll() {
    return await this.prisma.usuarios.findMany({ 
      orderBy:{ usuario_nombre: 'desc' }
    })
  }

  async findOne(id: number) {
    return await this.prisma.usuarios.findFirst({
      where: { usuario_id: id }
    })
  }

  async update(id: number, body: any) {
    return await this.prisma.usuarios.update({
      where: { usuario_id: id },
      data: body
    })
  }

  async remove(id: number) {
    await this.prisma.usuarios.delete({
      where: { usuario_id: id }
    }) 
    return { 
      "exito": true,
      "mensaje": "usuario eliminado",
      "id": id
    };
  }
}
