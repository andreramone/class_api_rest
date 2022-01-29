## COMANDO LINUX PARA CRIAR BANCO DE DADOS MYSQL

### docker run -p 3306:3306 --name class --detach -e MYSQL_ROOT_PASSWORD="classapi" -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=classdb -d mysql/mysql-server:latest --lower_case_table_names=1 --init-connect='GRANT CREATE USER ON . TO 'root'@'%';FLUSH PRIVILEGES;''

## A configuração do banco de dados está no arquivo config/database.js

## Necessario executar o comando npx sequelize-cli db:migrate
