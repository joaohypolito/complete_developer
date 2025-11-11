import express from 'express'

// Cria uma instância da aplicação Express
const app = express()
// Define a porta em que o servidor irá escutar
const port = 3000;

// Define uma rota GET para '/hello' que retorna 'Hello World!'
app.get('/hello', function (req, res) {
    res.send('Hello World!');
})

// Inicia o servidor na porta especificada
app.listen(port, function () {
    console.log('Listening on ' + port);
})
