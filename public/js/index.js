/**
 * Created by starsky on 4/25/17.
 */
let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: "Starsky",
        text: "Yup, that work for me"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});
