const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute')
const turmasRoute = require('./turmasRoute')
const niveisRoute = require('./niveisRoute')

//Cria uma rota base
module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoasRoute);
    app.use(turmasRoute);
    app.use(niveisRoute);
}