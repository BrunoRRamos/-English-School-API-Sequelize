const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute')

//Cria uma rota base
module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoasRoute);
}