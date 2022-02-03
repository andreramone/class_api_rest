# CLASS API

Class API é um projeto de teste para a empresa VERZEL.

## Instalação

Após o clone do repositório git do class API é necessário executar os seguintes comandos:

```bash
docker run -p 3306:3306 --name class --detach -e MYSQL_ROOT_PASSWORD="classapi" -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=classdb -d mysql/mysql-server:latest --lower_case_table_names=1 --init-connect='GRANT CREATE USER ON . TO 'root'@'%';FLUSH PRIVILEGES;
```

Se deseja alterar as configurações do database, modifique no arquivo:
### database.js
```js
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'classapi',
  database: 'classdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};

```
Após a criação dos arquivos de configuração devemos executar o yarn ou npm install para baixarmos todas as dependências necessárias para o projeto ser executado.

```bash
yarn
npm install
```
## Necessario executar o comando:
```bash
npx sequelize-cli db:migrate
```
## Executar

Para executarmos o projeto em modo de desenvolvimento podemos rodar o comando npm run dev no terminal dentro da pasta principal do projeto.

```bash
npm run dev
```
