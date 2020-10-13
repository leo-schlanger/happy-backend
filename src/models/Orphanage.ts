import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({type: 'decimal', scale:10, precision: 2})
  latitude: number;

  @Column({type: 'decimal', scale:10, precision: 2})
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column({type: 'boolean'})
  open_on_weekends: boolean;

  @OneToMany(()=>Image, image=>image.orphanage, {cascade:['insert', 'update']})
  @JoinColumn({name: 'orphanage_id'})
  images: Image[];
}