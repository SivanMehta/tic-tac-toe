import express from 'express';
import { WebSocketServer } from 'ws';
import morgan from 'morgan';
import path from 'path';

const staticDirectory = path.join('..', 'client', 'dist2');

const app = express();
app.use(express.static(staticDirectory));
app.use(morgan('dev'));
const wss = new WebSocketServer({ server: app });

wss.on('connection', function (ws, request) {
  const userId = request.session.userId;

  map.set(userId, ws);

  ws.on('error', console.error);

  ws.on('message', function (message) {
    //
    // Here we can now use session parameters.
    //
    console.log(`Received message ${message} from user ${userId}`);
  });

  ws.on('close', function () {
    map.delete(userId);
  });
});


app.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
