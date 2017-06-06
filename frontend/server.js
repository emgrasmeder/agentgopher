const http = require('http');
const net = require('net');
const url = require('url');

// Create an HTTP tunneling conn
const conn = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('okay\n');
});

conn.on('connect', (req, cltSocket, head) => {
  console.log('connection acquired')
});

// now that conn is running
conn.listen(8080, '127.0.0.1', () => {
  console.log('listening')
});