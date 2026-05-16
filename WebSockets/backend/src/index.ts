
// install ws - npm i ws @types/ws

import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080});

// event handler
wss.on("connection", function(socket) {
    // console.log("user connected");
    // setInterval(()=> {
    //     socket.send("Current price of solana is " + Math.random())
    // }, 500)
    // socket.send("Hellow");

    // ping pong application

    socket.on("message", (e)=>{
        // console.log(e.toString());
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
})

