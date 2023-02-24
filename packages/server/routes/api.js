import Connection from '../db/connection.js';

export function addRoutes(app) {
  const connection = new Connection();

  app.get('/api/game/:gameId', async (req, res) => {
    const { gameId } = req.params;

    const data = await connection.get('game', gameId);

    if(!data) {
      return res.status(404).json({ error: 'Game not found' }) 
    }

    res.json(data);
  });
}