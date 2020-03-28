// perfil de uma ong

const connection = require('../database/connection');


module.exports = {
    async index(request, response) { // casos específicos de uma única ong
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id) // compara os ids
            .select('*');
        
        return response.json(incidents);
    }
}