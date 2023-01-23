import React from 'react';
import { useGame, CELL_SIZE } from './constants';

function GameOver() {
  const [ { over, winner } ] = useGame();

  
}

export default function Board() {
  const [ state, setState ] = useGame();
  const cells = [];

  if(state.over) {
    return (
      <GameOver />
    )
  }

  state.board.forEach((row, i) => {
    row.forEach((cell, j) => {
      function onClick() {
        if(state.board[i][j] !== '') return;
        
        const newBoard = state.board.map(row => row.slice());
        newBoard[i][j] = state.player;
        setState({
          board: newBoard,
          player: state.player === 'x' ? 'o' : 'x',
        });
      }

      cells.push(
        <>
        <text
          x={ j * CELL_SIZE + 1 + CELL_SIZE / 2 }
          y={ i * CELL_SIZE + 1 + 3 * CELL_SIZE / 4 }
        >
          {cell}
        </text>
        <rect
          className='cell'
          key={`cell ${i}-${j}`}
          x={j * CELL_SIZE + 1}
          y={i * CELL_SIZE + 1}
          width={CELL_SIZE}
          height={CELL_SIZE}
          onClick={onClick}
        />
        </>
      );
    });
  })

  return (
    <svg viewBox={`0 0 360 360`}>
      <rect x="0" y = "0" width="360" height="360"/>
      { cells }
    </svg>
  )
}