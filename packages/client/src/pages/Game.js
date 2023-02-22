import React from 'react';
import Context from '../constants';
import Board from '../components/Board';
import Message from '../components/Message';

function Game() {
  return (
    <div className="grid">
      <Context>
        <Board />
        <Message />
      </Context>
    </div>
  );
};

export default Game;