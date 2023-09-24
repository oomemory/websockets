const WebSocketServer = require('ws').Server;
const config = require('./config');


const options = {
    port: config.port,
    host: config.host
}

const server = new WebSocketServer(options);

// listening
server.on('listening', () => {
    console.log(`Listening on port ${config.port}`);
    console.log(`Server address: ${server.address().address}`);
    console.log(`Version: ${config.version}`);
});

// handle errors
server.on('error', console.error);

// handle connections
server.on('connection', function connection(websocket, request) {

    // request object (sent when creating the connection) can be read here
    // console.log(request);

    websocket.on('message', function message(data) {
        console.log('Received: %s', data);
        websocket.send(`Thanks for sending ${data}`);
    });
});