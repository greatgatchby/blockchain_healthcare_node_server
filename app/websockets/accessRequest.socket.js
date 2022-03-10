const WebSocketServer = require('ws').WebSocketServer;

const wss = new WebSocketServer({ port: 8082 });
const client = []
wss.on('open', function open() {
    client.push('something')
    ws.send('something');
});

