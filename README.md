# Atividade: Implementação de um CRUD de Usuários com Node.js, TypeScript e TypeORM

**Objetivo:** O objetivo deste exercício é criar uma aplicação de linha de comando que implemente as operações básicas de CRUD (Create, Read, Update, Delete) para a tabela de usuários em um banco de dados SQLite. A aplicação deve ser escrita em TypeScript, utilizar o Node.js como runtime e o TypeORM como ORM.

**Descrição:** Você deve criar uma aplicação que permita gerenciar uma lista de usuários. A aplicação deve ser executada no terminal e deve fornecer um menu interativo com as seguintes opções:

1. Listar todos os usuários
2. Criar um novo usuário
3. Atualizar um usuário
4. Remover um usuário
5. Sair

**Instruções:**

1. Clone o projeto e em seguida execute os seguintes comandos

```node
npm install
npm run dev
```
2. A partir desse momento o código contido no arquivo **app.ts** estará  sendo executado
3. A sua tarefa é alterar o arquivo **app.ts** de forma que as opções a cima funcionem corretamente.  Para isso você deve:

#### Criar da Tabela de Usuários:

Crie uma entidade User com os seguintes campos:

| atributo     | tipo |
|---|---|
| id           | número inteiro, chave primária, autoincrementado |
| username     | string |
| email        | string |
| passwordHash | string |
| fullName     | string |
| isActive     | booleano, com valor padrão false |

#### Implementar a lógica de negócio

Neste atividade você não deverá realizar a validação dos dados digitados no console.

Basicamente, será necessário implementar corretamente as funções:

- listUsers
- createUser
- updateUser
- deleteUser

Se jugar necessário, você pode alterar a assinatura dessas funções e alterar outras partes do código.

Fique a vontade para usar o ActiveRecord ou DataMapper. Para entender como ambas soluções fucionam confira a [documentação oficial](https://typeorm.io/active-record-data-mapper).
 


