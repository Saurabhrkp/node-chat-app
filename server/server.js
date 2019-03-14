const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.emit('newMessage', generateMessage('Admin','Welcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    // socket.emit('newEmail', {
    //     from: 'anshu@mail.com',
    //     text: 'Hey whats up?',
    //     createdAt: 123
    // });

    // socket.emit('newMessage', {
    //     from: 'anjali@mail',
    //     text: 'Hey!',
    //     createdAt: 2133
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (message) => {
        console.log('Message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was Disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
