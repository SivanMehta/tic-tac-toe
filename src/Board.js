import React from 'react';
import { useGame, CELL_SIZE } from './constants';

function checkWinner() {

}

function Cell({ x, y, content, onClick}) {
  return (
    <>
      <text
        x={ x * CELL_SIZE + 1 + CELL_SIZE / 2 }
        y={ y * CELL_SIZE + 1 + 3 * CELL_SIZE / 4 }
      >
        {content}
      </text>
      <rect
        className='cell'
        key={`cell ${i}-${j}`}
        x={x * CELL_SIZE + 1}
        y={y * CELL_SIZE + 1}
        width={CELL_SIZE}
        height={CELL_SIZE}
        onClick={() => onClick(x, y)}
      />
    </>
  )
}

export default function Board() {
  const [ state, setState ] = useGame();
  const cells = [];

  if(state.over) {
    return (
      <GameOver />
    )
  }

  function onClick(x, y) {
    if(state.board[y][x] !== '') return;
    
    const newBoard = state.board.map(row => row.slice());
    newBoard[y][x] = state.player;
    setState({
      board: newBoard,
      player: state.player === 'x' ? 'o' : 'x',
    });

    checkWinner(newBoard);
  }

  state.board.forEach((row, y) => {
    row.forEach((cell, x) => {
      cells.push(
        <>
          <text
            x={ x * CELL_SIZE + 1 + CELL_SIZE / 2 }
            y={ y * CELL_SIZE + 1 + 3 * CELL_SIZE / 4 }
          >
            {cell}
          </text>
          <rect
            className='cell'
            key={`cell ${x}-${y}`}
            x={x * CELL_SIZE + 1}
            y={y * CELL_SIZE + 1}
            width={CELL_SIZE}
            height={CELL_SIZE}
            onClick={() => onClick(x, y)}
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