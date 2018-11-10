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
  });

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: "what's going on",
    createAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('Creating a new email', newEmail);
    newEmail.text += 'changed by server';
    socket.emit('printMessage', newEmail);
  });
}); //listens for a new connection and then perfoms a function

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
