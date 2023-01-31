const { Router } =  require('express');
const PessoasController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoasController.listPessoas);

module.exports = router;