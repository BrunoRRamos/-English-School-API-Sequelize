const express = require ('express');
const routes = require('./routes/index.js');

//Inicia o servidor
const app = express();
const port = 3000;

//Comunica com as rotas
routes(app);

//Escuta a porta do servidor
app.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`)
});

module.exports = app;