const express = require('express'); // Correção aqui para express
const http = require('http');
const socketIo = require('socket.io'); // Correção aqui para socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:5173' }}); // Correção aqui para socket.io
const PORT = 3001;

server.listen(PORT, () => {
  console.log('Server running...');
});
