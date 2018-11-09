const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public'); // https://nodejs.org/api/path.html#path_path_join_paths --It's better
//console.log(__dirname + '/../public'); --Not so good
//console.log(publicPath);
const socketIO = require('socket.io');
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User has been disconnected');
  })
}); //listens for a new connection and then perfoms a function

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
