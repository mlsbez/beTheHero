const connection = require('../database/connection');


module.exports = {
    async create(request, response) { // verificar se a ONG existe
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id) 
            .select('name') // o nome é a única info que vai retornar para o frontend
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'}) // bad request
        }

        return response.json(ong); // retorna apenas o nome da ong
    }
}