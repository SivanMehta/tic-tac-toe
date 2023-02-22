import express from 'express';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import morgan from 'morgan';
import path from 'path';

const staticDirectory = path.join('..', 'client', 'dist');

const app = express();
app.use(express.static(staticDirectory));
app.use('/game/:gameId', express.static(staticDirectory))
app.use(morgan('dev'));

const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', function (ws) {
  console.log('new connection!')
  ws.send(JSON.stringify(process.memoryUsage()));
  console.log('started client interval');

  ws.on('error', console.error);

  ws.on('close', function () {
    console.log('stopping client interval');
  });
});

server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
