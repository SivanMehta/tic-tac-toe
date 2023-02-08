import React, { createContext, useState, useContext } from 'react';

export const CELL_SIZE = 120;

// there's got to be a better way to do this
export function checkWinner(board, turn) {
  const potentialWinner = turn % 2 === 0 ? 'x' : 'o';
  // horizontal win
  for(let i = 0; i < 3; i++) {
    if(board[i][0] === potentialWinner &&
      board[i][1] === potentialWinner &&
      board[i][2] === potentialWinner) {
      return [potentialWinner, 'horizontal', i];
    }
  }

  // vertical win
  for(let i = 0; i < 3; i++) {
    if(board[0][i] === potentialWinner &&
      board[1][i] === potentialWinner &&
      board[2][i] === potentialWinner) {
      return [potentialWinner, 'vertical', i];
    }
  }

  // diagonal win
  if(board[0][0] === potentialWinner &&
    board[1][1] === potentialWinner &&
    board[2][2] === potentialWinner) {
    return [potentialWinner, 'diagonal', 0];
  }

  // other diagonal win
  if(board[0][2] === potentialWinner &&
    board[1][1] === potentialWinner &&
    board[2][0] === potentialWinner) {
    return [potentialWinner, 'diagonal', 1];
  }

  return false;
}

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const baseGame = {
  player: 'x', // which player is playing
  over: false, // if the game is over (indicates when the score needs to be calculated)
  board, // pieces placed on the board
  turn: 0
};

const Game = createContext(baseGame);
export const useGame = () => useContext(Game);

export default function Wrapper({ children }) {
  const [ state, set ] = useState(baseGame);

  function setState(change) {
    set({ ...state, ...change });
  }

  return (
    <Game.Provider value={[state, setState]}>
      {children}
    </Game.Provider>
  )
}
