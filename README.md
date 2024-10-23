
# Proof of Concept: Sequelize com Node.js

Esta é uma prova de conceito (PoC) que demonstra o uso do Sequelize, um ORM (Object-Relational Mapping) para Node.js, para interagir com um banco de dados MySQL. A PoC inclui operações básicas de CRUD (Create, Read, Update, Delete) em um modelo simples de usuário.

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/) 

## Instalação

1. Clone este repositório:


	   git clone https://github.com/Matheus-Freitas0/node-sequelize-poc
	   cd node-sequelize-poc 

2.  Instale as dependências:

    `npm install` 
    
4.  Crie um banco de dados no MySQL:
    
    `CREATE DATABASE nome_do_banco;` 
    
5.  Atualize as credenciais de conexão no arquivo `db.js`:

    `const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
      host: 'localhost',
      dialect: 'mysql',
    });` 
    

## Estrutura do Projeto


├── db.js            # Configuração do Sequelize

├── models

│   └── User.js      # Definição do modelo User

├── sync.js          # Script para sincronizar o modelo com o banco de dados

└── crud.js          # Operações CRUD

## Uso

1.  **Sincronizar os Modelos**: Execute o seguinte comando para criar as tabelas no banco de dados:
    
    `node sync.js` 
    
    Você verá a mensagem "Tabelas criadas!" se tudo estiver correto.
    
2.  **Realizar Operações CRUD**: Execute o comando abaixo para criar, ler, atualizar e excluir um usuário:
  
    `node crud.js` 
    
    Você verá as mensagens correspondentes para cada operação realizada.
    

## Funcionalidades

-   **Create**: Cria um novo usuário com nome e email.
-   **Read**: Lê todos os usuários do banco de dados.
-   **Update**: Atualiza o nome de um usuário existente.
-   **Delete**: Exclui um usuário do banco de dados.

## Contribuições

Sinta-se à vontade para abrir um issue ou enviar um pull request se você tiver sugestões ou melhorias.

## Licença

Este projeto está licenciado sob a MIT License.
