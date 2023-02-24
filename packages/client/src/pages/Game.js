import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Context from '../constants';
import Board from '../components/Board';
import Message from '../components/Message';

export async function gameLoader({ params }) {
  console.log('fetching info for game', params.gameId)
  return fetch('/api/game/' + params.gameId)
    .then((res) => res.json());
}

function Game() {
  const game = useLoaderData()
  return (
    <div className="grid">
      <Context>
        <Board />
        <Message />
      </Context>
      <pre>
        {JSON.stringify(game, null, 2)}
      </pre>
    </div>
  );
};

export default Game;