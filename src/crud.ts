import { input, password, confirm } from "@inquirer/prompts";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const userRepository = AppDataSource.getRepository(User);

export async function listUsers() {
    const users = await userRepository.find()

    console.log("Usuários:");
    console.table(users, ['id', 'fullName', 'username', 'email', 'password', 'isActive']);
};

export async function createUser() {
    const answers = {
        "id": Math.floor(Math.random() * 1000) + 1,  // gera um ID aleatório, de 1 a 999
        "fullName": await input({ "message": "Informe o nome completo do usuário:" }),  // 'await' serve para as informações subsequentes aparecerem somente após o usuário digitar a informação da linha requisitada
        "username": await input({ "message": "Informe o nome de usuário:" }),
        "email": await input({ "message": "Informe o email do usuário:" }),
        "password": await password({ "message": "Informe a senha desejada:" }),
    };

    await userRepository.save(answers)  // OBS.: se o ID de usuário gerado for repetido com algum já existente, o método '.save' automaticamente altera esse ID para o valor seguinte mais próximo que não está sendo utilizado

    console.table(answers)  // desenha uma tabela no console, com as informações sendo passadas como parâmetro
    console.log("Usuário criado com sucesso!");
};

export async function updateUser() {
    const id = Number(await input({ "message": "ID do usuário que terá os dados atualizados:" }));

    const user = await userRepository.findOneBy({ id: id });
    if(user == null) {
        console.log("Usuário não identificado");
        await updateUser();
    }
    else {
        const answers = {
            "id": id,
            "fullName": await input({ "message": "Novo nome completo do usuário:" }),
            "username": await input({ "message": "Informe o nome de usuário:" }),
            "email": await input({ "message": "Novo email do usuário:" }),
            "password": await password({ "message": "Nova senha:" }),
            "isActive": await confirm({ "message": "É um usuário ativo?:" }),
        };

        await userRepository.save(answers)
    
        console.table(answers)
        console.log("Usuário atualizado com sucesso!");
    }
};

export async function deleteUser() {
    const id = Number(await input({ "message": "ID do usuário a ser removido:" }));

    const user = await userRepository.findOneBy({ id: id });
    if(user == null) {
        console.log("Usuário não identificado");
        await deleteUser();
    }
    else {
        await userRepository.remove(user)
        console.log("Usuário removido com sucesso!");
    }
};