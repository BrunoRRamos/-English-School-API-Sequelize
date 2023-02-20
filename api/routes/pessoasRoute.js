const { Router } =  require('express');
const PessoasController = require('../controllers/PessoaController');

const router = Router();

router
.get('/pessoas', PessoasController.listPessoas)
.get('/pessoas/:id', PessoasController.getPessoaById)
.post('/pessoas', PessoasController.createPessoa)
.put('/pessoas/:id', PessoasController.updatePessoa)
.delete('/pessoas/:id', PessoasController.deletePessoa);

module.exports = router;