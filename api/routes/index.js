const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute.js')

//Cria uma rota base
module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoasRoute);
    app.get('/', (req, res) => {
        res.send('Batata');
    })
}