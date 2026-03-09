const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // Preparar o conteúdo HTML
    fs.readFile('./html/pag1.html', (err, data) => {
        if (err) {
            console.log("Erro ao carregar a página");
            res.write("Sinto muito, não conseguimos carregar a página");
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, host, () => {
    console.log("Servidor no ar!!!");
});