import express from 'express';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(morgan('dev'));

const staticDirectory = path.join('..', 'client', 'dist');
const UIRouter = express.static(staticDirectory);
const UIRoutes = [
  '/',
  '/game/:gameId'
];
UIRoutes.forEach(route => app.use(route, UIRouter));

const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', function (ws) {
  console.log('new connection!')
  ws.send(JSON.stringify(process.memoryUsage()));

  ws.on('error', console.error);

  ws.on('close', function () {
    console.log('stopping client interval');
  });
});

server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
