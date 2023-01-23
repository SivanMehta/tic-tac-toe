import React, { createContext, useState, useContext } from 'react';

let board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
];

const baseGame = {
  player: 'x', // which player is playing
  over: false, // if the game is over (indicates when the score needs to be calculated)
  board, // pieces placed on the board
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