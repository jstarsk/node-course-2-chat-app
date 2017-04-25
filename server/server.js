/**
 * Created by starsky on 4/25/17.
 */
require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));
http://localhost:3000/c
    io.on('connection', (socket) => {
        console.log('New user connection');

        socket.on('disconnect', () => {
            console.log('User was disconnect from the server');
        });
    });

server.listen(port, () => {
    console.log(`Started at port ${port}`);
});

module.exports = {app};





