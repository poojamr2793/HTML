const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

let clients = [];

server.on("connection", socket => {

    clients.push(socket);

    socket.on("message", message => {

        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });

    });

    socket.on("close", () => {
        clients = clients.filter(client => client !== socket);
    });

});

console.log("Server running on http://localhost:3000");