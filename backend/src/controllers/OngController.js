const crypto = require('crypto'); /* gerar uma string aleatória */

const connection = require('../database/connection'); /* importar o connection.js */

module.exports = {
    async index (request, response) { // rota para listar todas as ongs, normalmente se utiliza index para listagem 
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
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
        }
};