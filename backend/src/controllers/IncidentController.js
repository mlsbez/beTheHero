const connection = require('../database/connection');

module.exports = {
    async index (request, response) { // rota para listar todos os casos, normalmente se utiliza index para listagem 
        const incidents = await connection('incidents').select('*');
    
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        /* a info de qual empresa tá logado vem do cabeçalho da requisição */
        const ong_id = request.headers.authorization; /* o cabeçalho vem infos do contexto da requisição, idioma, localização, autenticação. Authorization veio do header do Insomnia */
        
        const [id] = await connection('incidents').insert({ /* a primeira chave desse array vai ser armazenada numa variável chamada id */
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    } 
};