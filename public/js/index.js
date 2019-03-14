var socket = io();

socket.on("connect", function() {
  console.log("Connected to app");

//   socket.emit('createEmail', {
//       to: 'baba@mail.com',
//       text: 'Hey anshu.'
//   });

//   socket.emit('createMessage', {
//         from: 'sameer',
//         text: 'hello world'
//     });

});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on('newEmail', function (email) {
    console.log('Got new email', email)
});

socket.on('newMessage', function (message) {
    console.log('New Message is recieved', message)
});

