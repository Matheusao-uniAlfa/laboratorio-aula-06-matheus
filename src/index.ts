import { AppDataSource } from "./data-source";
import { Paciente } from "./entity/Paciente";
import { Especialidade } from "./entity/Especialidade";

AppDataSource.initialize()
  .then(async () => {
    console.log("Conexao aberta. O banco esta pronto.");

    const repo = AppDataSource.getRepository(Paciente);

await repo.save({
  nome: 'Ana "Aninha" Souza',
  nascimento: "1988-04-12"
});

console.log(await repo.find());

const especialidadeRepo = AppDataSource.getRepository(Especialidade);

await especialidadeRepo.save({
  nome: "Cardiologia"
});

await especialidadeRepo.save({
  nome: "Dermatologia"
});

await especialidadeRepo.save({
  nome: "Pediatria"  
});

  })
  .catch((erro: unknown) => {
    console.error("Falhou ao abrir a conexao:");
    console.error(erro);
  });
