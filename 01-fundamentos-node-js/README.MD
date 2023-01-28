# Fundamentos NodeJS

`npm init -y` para iniciar o package.json com as depêndencias necessárias

## Módulo HTTP

Nesse curso utilizaremos o módulo http e importaremos ele por meito do CommonJS que é o require, no entanto, hoje em dia utilizamos ESMODULE, que funciona com import e export.

O módulo http serve para criar e lidar com as requisiões HTTP em uma porta específica

http.createServer cria um servidor no qual temos um req (request) e um res (response) para utilizarmos e assim conseguimos listar as rotas de acesso desse servidor na porta que desejarmos. 

Sobre o parâmetro request é possível afirmar que: Através desse objeto é possível obter todas as informações presente na requisição, como dados enviados em JSON, parâmetros de rota nomeados e não nomeados, entre outros.

## CommonJS x ESModules

CommonJS --> require --> const http = require('http')
ESModule --> import/export --> import http from 'http'

Para habilitarmos o uso de importações como ESModules, precisamos no package.json adicionar a propriedade "type" com o valor "module", caso não tenha essa propriedade ou esse valor na propriedade, o type default será CommonJs

Para importarmos de um módulo interno do Node.js precisamos colocar o prefixo "node:" na importação. Ex.: `import http from 'node:http'`


## Facilitando o trabalho

Comando para rodar nossa aplicação direto com visualização de alterações em tempo real:
Criar um script no package.json com o nome "dev" e com o código: "node --watch src/server.js"