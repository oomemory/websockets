import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', function connection(websocket) {
    websocket.on('error', console.error);

    websocket.on('message', function message(data) {
        console.log('Received: %s', data);
        websocket.send(`Thanks for sending ${data}`);
    });
});