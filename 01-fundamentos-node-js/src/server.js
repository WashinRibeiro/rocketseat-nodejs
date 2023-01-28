import http from 'node:http'

// Criar Usuário
// Listagem de usuários
// Edição de usuários
// Remoção de usuários

// Fundamentos de requisições
// - HTTP 
//      - Método HTTP
//      - URL

// GET, POST, PUT, PATCH, DELETE

// GET --> Buscar uma recurso do back-end
// POST --> Criar uma recurso no back-end
// PUT --> Editar ou atualizar uma recurso no back-end
// PATCH --> Atualizar uma informa~çao única ou específica de um recurso do back-end
// DELETE --> Deletar um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criando usuário no back-end

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        return res.end('Listagem de usuários')
    }

    if (method === 'POST' && url === '/users') {
        return res.end('Criação de usuário')
    }

    return res.end('Hello World')
})

server.listen(3333)