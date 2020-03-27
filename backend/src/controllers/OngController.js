const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
const crypto = require('crypto'); // importa a biblioteca crypto para gerarmos o id

module.exports = {
    // SELECT: lista todas as ONG's cadastradas no banco de dados. Geralmente, o método de listar é chamado de index.
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
       
        return response.json(ongs);
    },

    // INSERT: cadastra/insere uma nova ONG no banco de dados
    async create (request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        // Gerar ID aleatório com 4 letras, utilizando a biblioteca crypto
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
    
        return response.json({ id });
    }
};