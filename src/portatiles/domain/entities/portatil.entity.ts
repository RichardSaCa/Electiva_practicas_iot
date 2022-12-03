import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class PortatilEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   color: string;

   @Column()
   marca: string;

   @Column()
   ramGB1: number;

   @Column()
   gama: string;
}
