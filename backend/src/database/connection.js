const knex = require('knex');
const configuration = require('../../knexfile') /* importando as configuraçãos do bd duas pastas acima */

const connection = knex(configuration.development); /* conexão de desenvolvimento */

module.exports = connection; /* exportar desse arquivo a conexão com o bd */
