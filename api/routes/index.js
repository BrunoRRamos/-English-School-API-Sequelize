const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute')
const turmasRoute = require('./turmasRoute')

//Cria uma rota base
module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoasRoute);
    app.use(turmasRoute);
}