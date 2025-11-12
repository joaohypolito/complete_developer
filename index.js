import express from 'express'
import { routeHello, routeAPInames } from './routes.js';

// Cria uma instância da aplicação Express
const app = express()
// Define a porta em que o servidor irá escutar
const port = 3000;

// Define uma rota GET para '/hello' que retorna 'Hello World!'
app.get('/hello', function (req, res) {
    const response = routeHello(req, res);

    res.send(response);
})

app.get('/api/names', async function (req, res) {
    let response;

    try {
        response = await routeAPInames(req, res);
    } catch (err) {
        console.log(err)
    }

    res.send(response);
})

// Inicia o servidor na porta especificada
app.listen(port, function () {
    console.log('Listening on ' + port);
})
