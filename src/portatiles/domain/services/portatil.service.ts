import { Injectable } from '@nestjs/common';
import { Portatil } from '../models/portatil.model';

@Injectable()
export class PortatilService {

  private portatil: Portatil[] = [{
    color: 'negro',
    marca: 'hp',
    ramGB: 10,
    gama: 'media'
  }]

  public listar() : Portatil[] {
    return this.portatil
  }

  public crear(portatil1: Portatil): Portatil {
    this.portatil.push(portatil1);
    return portatil1;
  }

  public modificar(id: number, portatil1: Portatil): Portatil {
      this.portatil[id] = portatil1
      return this.portatil[id];
  }

  public eliminar(id: number): boolean {
    const totalportatilesAntes = this.portatil.length;
    this.portatil = this.portatil.filter((val, index) => index != id);
    if(totalportatilesAntes == this.portatil.length){
      return false;
    }
    else{
      return true;
    }
  }

   public cambiarRam(id: number, ramGB: number): Portatil {
      this.portatil[id].ramGB = ramGB;
      return this.portatil[id];
   }

}