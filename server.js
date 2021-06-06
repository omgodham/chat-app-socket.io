const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + "/public"));

app.get('/' , (req,res) => {
    res.sendFile(__dirname + "/index.html");
});



io.on('connection' , (socket) => {
   
        socket.on("message", (msg) => {
            socket.broadcast.emit("message", msg)
          });

});

server.listen(8000,()=>{
    console.log('Running on port 8000');
});




