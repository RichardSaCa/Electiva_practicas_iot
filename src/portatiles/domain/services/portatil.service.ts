import { Injectable } from '@nestjs/common';
import { Portatil } from '../models/portatil.model';
import { PortatilEntity } from '../entities/portatil.entity';
import { InjectRepository } from '@nestjs/typeorm';
//import * as typeorm from 'typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';

@Injectable()
export class PortatilService {

  constructor(
   @InjectRepository(PortatilEntity)
   private repository: MongoRepository<PortatilEntity>,
  ) {}  

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





public async list(): Promise<PortatilEntity[]> {
   return await this.repository.find();
}

public async create(portatilData: PortatilEntity): Promise<InsertResult> {
   const newPortatil = await this.repository.insert(portatilData);
   return newPortatil;
}

public async update(
   id: number,
   portatilData: PortatilEntity,
): Promise<UpdateResult> {
   const updatedPortatil = await this.repository.update(id, portatilData);
   return updatedPortatil;
}

public async delete(id: number): Promise<boolean> {
   const deleteResult = await this.repository.delete(id);
   return deleteResult.affected > 0;
}

//public async updateRamGB(id: number, ramGB: number): Promise<UpdateResult> {
//   const updatedPortatil = await this.repository.update(id, { ramGB1: ramGB });
//   return updatedPortatil;
//}

}
