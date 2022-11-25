import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Computador {
  color: string,
  marca: string,
  ramGB: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private computadores: Computador[] = [{
    color: "negro",
    marca: "hp",
    ramGB: 12
  }]

  @Get()
  getHello(): Computador[] {
    return this.computadores;
  }

  @Post()
  crear(@Body() datos: Computador): Computador {
    this.computadores.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Computador, @Param('id') id: number): Computador | string {
    try {
      this.computadores[id] = datos
      return this.computadores[id];
    }
    catch {
      return `No fue posible modificar el computador en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try {
      this.computadores = this.computadores.filter((val, index) => index != id);
      return true;
    }
    catch {
      return false;
    }
  }

  @Patch(":id/ramGB/:ramGB")
  cambiarEdad(@Param('id') id: number, @Param('ramGB') ramGB: number): Computador | string {
    try {
      this.computadores[id].ramGB = ramGB;
      return this.computadores[id];
    }
    catch {
      return `No fue posible modificar al computador en la posición ${id}`
    }
  }
}










// import { Controller, Get, Param, Post } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}


//   private persona = "Mundo";

//   @Get()
//   getHello(): string {
//     return `Hola: ${this.persona}`
//   }

//   @Post(':nombre')
//   modificar(@Param('nombre') nombre: string): string {
//      this.persona = nombre;
//      return `Mensaje modificado: ${this.persona}`
//   }
// }
