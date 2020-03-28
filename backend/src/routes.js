const express = require('express');
const crypto = require('crypto'); /* gerar uma string aleatória */

const connection = require('./database/connection'); /* importar o connection.js */


const routes = express.Router(); /* desacoplando o módulo de rotas em uma nova variável */

routes.post('/ongs', async (request, response) => { 
    const { name, email, whatsapp, city, uf } = request.body; /* acessar do corpo da requisição */
    
    const id = crypto.randomBytes(4).toString('HEX'); /* gerar 4 bytes de caracteres aleatórios e converte numa string hexadecimal  */

    await connection('ongs').insert({ /* o async junto com o await faz com que essa etapa seja concluída completamente para fluir o restante do código */
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id }); /* é esse id que a ONG vai utilizar pra se conectar com a app */
});

/* exportar uma variável para dentro de um arquivo */
module.exports = routes; /* exportando as rotas para o index.js */