const database = require('../models');

class PessoasController {
    //Método GET que lista todas as Pessoas cadastradas no banco.
    static async listPessoas(req, res) {
        try {
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople);

        } catch(error) {
            return res.status(500).json(error.menssage);
        }
    }
}

module.exports = PessoasController;