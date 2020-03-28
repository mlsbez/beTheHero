const express = require('express');

const routes = express.Router(); /* desacoplando o módulo de rotas em uma nova variável */

routes.get('/users', (request, response) => { /* criando a primeira rota. '/' = (localhost:3333). Uma função como segundo parâmetro */
    /* request: o que chega da requisição http, response o que é devolvido para o usuário */

    const params = request.query;

    console.log(params);
    
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Mariana Lima"
    });
});

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Celiana Maria"
    });
})

/* exportar uma variável para dentro de um arquivo */
module.exports = routes; /* exportando as rotas para o index.js */