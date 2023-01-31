const { Router } =  require('express');
const PessoasController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoasController.listPessoas);

module.exports = router;