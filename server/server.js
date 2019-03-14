const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected')

    // socket.emit('newEmail', {
    //     from: 'anshu@mail.com',
    //     text: 'Hey whats up?',
    //     createdAt: 123
    // });

    socket.emit('newMessage', {
        from: 'anjali@mail',
        text: 'Hey!',
        createdAt: 2133
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (message) => {
        console.log('Message', message); 
    });

    socket.on('disconnect', () => {
        console.log('User was Disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
