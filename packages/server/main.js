import express from 'express';
import { WebSocketServer } from 'ws';
import morgan from 'morgan';
import { createServer } from 'http';
import { generateRoutes } from './routes/index.js';

const app = express();
app.use(morgan('dev'));
generateRoutes(app);

const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', function (ws) {
  console.log('new connection!')
  ws.send(JSON.stringify(process.memoryUsage()));

  ws.on('error', console.error);

  ws.on('close', function () {
    console.log('ending client connection');
  });
});

server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
