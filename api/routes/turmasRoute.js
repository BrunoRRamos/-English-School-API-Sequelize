const { Router } =  require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turma', TurmaController.listTurmas);
router.get('/turma/:id', TurmaController.getTurmaById);
router.post('/turma', TurmaController.createTurma);
router.put('/turma/:id', TurmaController.updateTurma);
router.delete('/turma/:id', TurmaController.deleteTurma);

module.exports = router;