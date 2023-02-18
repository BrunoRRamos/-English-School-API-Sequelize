const database = require('../models');

class PessoasController {
    //Método GET que lista todas as Pessoas cadastradas no banco.
    static async listPessoas(req, res) {
        try {
            const todasPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasPessoas);

        } catch(error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async getPessoaById (req, res) {
        const { id } = req.params;

        try {
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umaPessoa);

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async createPessoa (req, res) {
        const novaPessoaDados = req.body;
        
        try {
            const novaPessoa = await database.Pessoas.create(novaPessoaDados);
            return res.status(201).json(novaPessoa);
            
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

}

module.exports = PessoasController;