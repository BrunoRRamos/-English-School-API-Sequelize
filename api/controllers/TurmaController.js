const { json } = require('body-parser');
const database = require('../models');

class TurmaController {
    static async listTurmas(req, res) {
        try {
          const todasAsTurmas = await database.Turmas.findAll();
          return res.status(200).json(todasAsTurmas);

        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async getTurmaById (req, res) {
        const { id } = req.params;

        try {
            const umaTurma = await database.Turmas.findOne({ where : { id: Number(id) } });
            return res.status(200).json(umaTurma);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createTurma (req, res) {
        const novaTurmaDados = req.body;
        
        try {
            const novaTurma = await database.Turmas.create(novaTurmaDados);
            return res.status(200).json(novaTurma);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateTurma (req, res) {
        const novasInfos = req.body;
        const { id } = req.params;

        try {
            await database.Turma.update(novasInfos, { where : { id: Number(id) } });
            const turmaAtualizada = await database.Turmas.findOne({ where : { id: Number(id) } });
            return res.status(200).json(turmaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteTurma (req, res) {
        const { id } = req.params;

        try {
            await database.Turmas.destroy({ where : { id: Number(id) } });
            return res.status(200).json({ Message: `Registro de ID:${id} deletado !`});

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }
}

module.exports = TurmaController;