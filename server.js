const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('build'));

const port = process.env.PORT || 8080;

server.listen(port, () =>{
    console.log("listening on port: " + port)
})

io.on('connect', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', (data) => {
    });
});

  