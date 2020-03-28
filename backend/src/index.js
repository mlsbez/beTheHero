const express = require('express'); /* pacote express contém todas as funcionalidades do express */
const routes = require('./routes'); /* caminho relativo - está na mesma pasta do index.js */

const app = express(); /* variável que armazena a aplicação */

app.use(express.json()); /* transformar json em js */

app.use(routes);

// app.get('/users/:id', (request, response) => {
//     const params = request.params;

//     console.log(params);
// })



app.listen(3333); /* a porta da aplicação */
