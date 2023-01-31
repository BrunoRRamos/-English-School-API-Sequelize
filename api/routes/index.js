const bodyParser = require('body-parser');

//Cria uma rota base
module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.send('Batata');
    })
}