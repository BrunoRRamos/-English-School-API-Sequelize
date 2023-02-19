const { json } = require('body-parser');
const database = require('../models');

class NiveisController {
    static async listNiveis(req, res) {
        try {
            const todosNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosNiveis);

        } catch(error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async getNivelById (req, res) {
        const { id } = req.params;

        try {
            const umNivel = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umNivel);

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async createNivel (req, res) {
        const novoNivelDados = req.body;

        try {
            const novoNivel = await database.Niveis.create(novoNivelDados);
            return res.status(200).json(novoNivel);

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async updateNivel (req, res) {
        const novasInfos = req.body;
        const { id } = req.params;

        try {
            await database.Niveis.update(novasInfos, {where : { id: Number(id) } });
            const nivelAtualidado = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(nivelAtualidado);

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async deleteNivel (req, res) {
        const { id } = req.params;

        try {
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ Message: `Registro de ID:${id} deletado !`});
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }
}

module.exports = NiveisController;