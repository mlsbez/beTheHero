const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); /* desacoplando o módulo de rotas em uma nova variável */

// login
routes.post('/sessions', SessionController.create);

// listagem
routes.get('/ongs', OngController.index); 
// cadastro
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete); /* id do caso que ela quer deletar */


/* exportar uma variável para dentro de um arquivo */
module.exports = routes; /* exportando as rotas para o index.js */