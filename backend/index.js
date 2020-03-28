const express = require('express'); /* express contém todas as funcionalidades do express */

const app = express(); /* variável que armazena a aplicação */

app.use(express.json()); /* transformar json em js */

app.get('/users', (request, response) => { /* criando a primeira rota. '/' = (localhost:3333). Uma função como segundo parâmetro */
    /* request: o que chega da requisição http, response o que é devolvido para o usuário */

    const params = request.query;

    console.log(params);
    
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Mariana Lima"
    });
});

// app.get('/users/:id', (request, response) => {
//     const params = request.params;

//     console.log(params);
// })

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Celiana Maria"
    });
})

app.listen(3333); /* a porta da aplicação */
