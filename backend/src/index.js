const express = require('express'); /* pacote express contém todas as funcionalidades do express */
const cors = require('cors'); // módulo vai determinar quem pode acessar a app
const routes = require('./routes'); /* caminho relativo - está na mesma pasta do index.js */

const app = express(); /* variável que armazena a aplicação */

app.use(cors()); 
app.use(express.json()); /* transformar json em js */
app.use(routes);

app.listen(3333); /* a porta da aplicação */
