// OBS.: os dados de usuários criados são salvos no arquivo "mydb.sqlite" existente na pasta da atividade
// para rodar o programa, digite "npm run dev"

import { select } from "@inquirer/prompts";
import { AppDataSource } from "./data-source";
import { listUsers, createUser, updateUser, deleteUser } from "./crud";

async function main() {
  await AppDataSource.initialize();

  const menuOptions = [
    {
      name: "Listar todos os usuários",
      value: "listar",
      description: "Lista todos os usuários cadastrados"
    },
    {
      name: "Criar um novo usuário",
      value: "criar",
      description: "Cria um novo usuário"
    },
    {
      name: "Atualizar um usuário",
      value: "atualizar",
      description: "Atualiza um usuário cadastrado"
    },
    {
      name: "Remover um usuário",
      value: "remover",
      description: "Deletar um usuário cadastrado"
    },
    {
      name: "Sair",
      value: "sair",
      description: "Sair do programa"
    },
  ];

  const menu = async () => {
    const answer = await select({
      message: "Escolha uma opção:",
      choices: menuOptions
    });

    switch(answer) {
      case menuOptions[0].value:
        await listUsers();
        break;
      case menuOptions[1].value:
        await createUser();
        break;
      case menuOptions[2].value:
        await updateUser();
        break;
      case menuOptions[3].value:
        await deleteUser();
        break;
      case menuOptions[4].value:
        process.exit(0);
    }

    menu(); // menu reaparece após uma de suas opções ser selecionada
  };

  menu();   // menu aparece quando o comando "npm run dev" é escrito no console
};

main(); // roda a função principal