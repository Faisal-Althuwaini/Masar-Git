import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// table name
@Entity('users')
export class User {
  // cols
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  age: number;
}
