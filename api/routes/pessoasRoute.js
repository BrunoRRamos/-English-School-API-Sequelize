const { Router } =  require('express');
const PessoasController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoasController.listPessoas);
router.get('/pessoas/:id', PessoasController.getPessoaById);
router.post('/pessoas', PessoasController.createPessoa);

module.exports = router;