import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  nascimento: string;

  @Column({ nullable: true })
  convenio: string;
}