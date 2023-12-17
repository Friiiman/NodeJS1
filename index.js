const http = require('http');

let mainCounter = 0;
let aboutCounter = 0;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`<h1>Main page!</h1> <a href="/about">About page</a> <p>Number of visits: ${++mainCounter}</p>`);
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`<h1>About page!</h1> <a href="/">Main page</a> <p>Number of visits: ${++aboutCounter}</p>`);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end('<h1>404</h1> <a href="/">Main page</a>');
            break;
    }
});

const port = 3000;
server.listen(port);
