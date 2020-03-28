const connection = require('../database/connection');

module.exports = {
    async index (request, response) { // rota para listar todos os casos, normalmente se utiliza index para listagem 
        const { page = 1} = request.query; // colocar paginação
        
        const [count] = await connection('incidents').count(); // [count] = count[0]
            
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // adiciona dados da ONG nos casos (email, wpp)
            .limit(5)
            .offset((page -1) * 5) // pra pular os registros e mostrar por cada página
            .select(['incidents.*', 
            'ongs.name', 
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        // mostra no cabeçalho da requisição a quantidade total de casos
        response.header('X-Total-Count', count['count(*)']); // nome do cabeçalho tem esse padrão nesses casos. o count(*) é a resposta do console.log(count);
    
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
    },
    
    async delete(request, response) {
        const { id } = request.params; /* parâmetro de rota */
        const ong_id = request.headers.authorization; /* vai buscar o id da ong através do headers.authorization */
    
        const incident = await connection('incidents')
            .where('id', id) // comparando os ids pra não apagar de outra ong
            .select('ong_id') // só precisa dessa coluna
            .first(); //vai retornar apenas 1 resultado
        
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'}) // não autorizado
        }

        await connection('incidents').where('id', id).delete(); // deleta os registros dentro da tabela do bd

        return response.status(204).send(); // resposta pro frontend que não tem conteúdo



    }
};