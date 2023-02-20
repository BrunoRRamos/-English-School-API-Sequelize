const { Router } =  require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
.get('/niveis', NivelController.listNiveis)
.get('/niveis/:id', NivelController.getNivelById)
.post('/niveis', NivelController.createNivel)
.put('/niveis/:id', NivelController.updateNivel)
.delete('/niveis/:id', NivelController.deleteNivel);

module.exports =  router
