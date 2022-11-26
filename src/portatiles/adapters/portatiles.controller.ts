import { Body, Controller, Delete, Get,Inject, Param, Patch, Post, Put,UseGuards } from '@nestjs/common';
import { Portatil } from '../domain/models/portatil.model';
import { PortatilService } from '../domain/services/portatil.service';
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class PortatilController  implements PortatilController{
  constructor(private readonly portatil1Service: PortatilService) { }

  @Get()
  getHello() {
    try{
      return this.portatil1Service.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar portatil");
    }
  }

  @UseGuards(AuthGuard('local')) 

  @Post()
  crear(@Body() datos: Portatil) {
    try{
      return this.portatil1Service.crear(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear portatil");
    }
  }

  @Put(":id")
  modificar(@Body() datos: Portatil, @Param('id') id: number) {
    try{
      return this.portatil1Service.modificar(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar portatil");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try{
      return this.portatil1Service.eliminar(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar portatil");
    }
  }

  @Patch(":id/ramGB/:ramGB")
  cambiarEdad(@Param('id') id: number, @Param('ramGB') ramGB: number) {
    try{
      return this.portatil1Service.cambiarRam(id, ramGB);
    }
    catch(e){
      return errReturn(e, "Error al modificar edad del portatil");
    }
  }
}