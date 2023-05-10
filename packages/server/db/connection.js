import { v4 as uuid } from 'uuid';

function newGame() {
  return {
    gameId: uuid(),
    board: '_________',
    turn: 'x'
  };
}

export default class Connection {
  constructor() {
    // this is a "database" connection, we'll use a Map for now
    this.db = new Map();
    // dummy data
    this.db.set('game:1', {
      gameId: 1,
      board: 'xoxoxoxoxox',
      turn: 'x'
    });
  }

  // should in reality be queued and processed asynchronously,
  // but we'll keep it simple for now
  async get(key, id) {
    let game;
    if(id === 'new') {
      game = newGame();
      this.set(key, game.gameId, game);
    } else {
      game = this.db.get(`${key}:${id}`);
    }
    return game;
  }

  async getAllGames() {
    return Object.fromEntries(this.db);
  }

  set(key, id, data) {
    this.db.set(`${key}:${id}`, data);
  }
}