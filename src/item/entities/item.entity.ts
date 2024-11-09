import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// table name
@Entity('items')
export class Item {
  // cols
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
