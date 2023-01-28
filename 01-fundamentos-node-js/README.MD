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

## Rotas de criação e listagem (métodos HTTP)

Fundamentos de requisições
- HTTP
  - Método HTTP
  - URL

Métodos:
**GET** --> Buscar uma recurso do back-end
**POST** --> Criar uma recurso no back-end
**PUT** --> Editar ou atualizar uma recurso no back-end
**PATCH** --> Atualizar uma informa~çao única ou específica de um recurso do back-end
**DELETE** --> Deletar um recurso no back-end

Mesmas rotas, funcionalidades diferente:
GET /users => Busca usuários do back-end
POST /users => Cria usuário no back-end

## Salvando usuários em memória

### Tipos de aplicações 

***Stateful*** --> Sempre terá alguma informação guardada na memória para que ela continue funcionar corretamente. Quando essa aplicação for derrubada e perder os seus dados em memória, ela pode funcionar de uma maneira diferente do que ela estava funcionando antes.

***Stateless*** --> Ela não salva nada em memória, ela salva em dispositivos externos, como banco de dados ou arquivos de textos, então qualquer problema de funcionamento, os dados vão se manter iguais, não afetando nada quando a aplicação voltar a funcionar.


### Erro ao retornar um array como resposta - Utilizando o JSON
`The "chunk" argument must be of type string or an instace of Buffer or Uint8Array - Received an instance of Array`

Esse erro se dá pois a resposta para o frontend não pode ser um Array. Tem que ser uma strting, um Buffer ou então um Uint8Array.
Nesse caso converteremos o array para string, que é seria utilizando o JSON (Javascript Object Notation).
O JSON é uma estrutura de dados muito utilizada na transmissão de dados entre front e back e também back com back. Com essa estrutura, conseguimos transformar qualquer tipo de variável em uma string para trabalhar.

Para o Frontend saber que estamos retornando a nossa requisição em JSON, utilizamos os Cabeçalhos (Requisição / resposta), que são tipos de metadados para quem utilizar a informação. Os cabeçalhos são informações adicionais que não tem haver com o dado retornado do back para o front, mas sim, como aquele dado pode ser interpretado pelo backend.