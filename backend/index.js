const express = require('express'); /* express contém todas as funcionalidades do express */

const app = express(); /* variável que armazena a aplicação */

app.get('/', (request, response) => { /* criando a primeira rota. '/' = (localhost:3333). Uma função como segundo parâmetro */
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Mariana Lima"
    });
});

app.listen(3333); /* a porta da aplicação */
