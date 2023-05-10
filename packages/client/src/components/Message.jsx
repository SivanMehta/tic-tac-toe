import React from 'react';
import { useGame } from '../constants.jsx';

export default function Message() {
  const [ {over, turn} ] = useGame();

  let content;

  if(over) {
    const winner = (turn % 2 === 0) ? 'O' : 'X';
    content = `Game Over - ${winner} wins!`;
  } else if (turn === 9) {
    content = `Game Over - It's a tie!`;
  } else {
    // win state is set AFTER the turn, so we have to flip the ternary here
    const player = (turn % 2 === 0) ? 'X' : 'O';
    content = `${player} to play!`;
  }

  return (
    <pre className="message">
      { content }
    </pre>
  )
}