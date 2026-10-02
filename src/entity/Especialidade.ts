import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Especialidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;
}