const { json } = require('body-parser');

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

    static async updatePessoa (req, res) {
        const novasInfos = req.body;
        const { id } = req.params;

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoaAtualizada);

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async deletePessoa (req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.destroy({ where : { id: id }});
            return res.status(200).json({ Message: `Registro de ID:${id} deletado !`});

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async getMatriculaById(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const umaMatricula = await database.Matriculas.findOne( {
                where: {
                  id: matriculaId,
                  estudante_id: estudanteId
                },
                attributes: ['id', 'status', 'createdAt', 'updatedAt', 'estudante_id', 'turma_id']
              });
            return res.status(200).json(umaMatricula)

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async createMatricula (req, res) {
        const { estudanteId } = req.params;
        const novaMatriculaDados = {...req.body, estudante_id: Number(estudanteId)};
        
        try {
            const novaMatricula = await database.Matriculas.create(novaMatriculaDados);
            return res.status(201).json(novaMatricula);
            
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
          await database.Matriculas.update(novasInfos, { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId) 
            }})
          const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) },
          attributes: ['id', 'status', 'createdAt', 'updatedAt', 'estudante_id', 'turma_id']});
          return res.status(200).json(MatriculaAtualizada)
          
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula (req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            await database.Matriculas.destroy({ where : { id: Number(matriculaId) }});
            return res.status(200).json({ Message: `Registro de ID:${matriculaId} deletado !`});

        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

}

module.exports = PessoasController;