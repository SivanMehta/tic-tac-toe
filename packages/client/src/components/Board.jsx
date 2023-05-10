import React from 'react';
import { useGame, CELL_SIZE, checkWinner } from '../constants.jsx';
import GameOver from '../GameOver.jsx';

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

  let overlay = "";
  if (state.over) {
    overlay = <GameOver />;
  }

  function onClick(x, y) {
    if(state.board[y][x] !== '') return;
    if(state.over) return;
    
    const newBoard = state.board.map(row => row.slice());
    newBoard[y][x] = state.player;
    setState({
      board: newBoard,
      player: state.player === 'x' ? 'o' : 'x',
      over: checkWinner(newBoard, state.turn),
      turn: state.turn + 1
    });
  }

  state.board.forEach((row, y) => {
    row.forEach((content, x) => {
      cells.push(
        <Cell
          key={`cell ${x}-${y}`}
          x={x}
          y={y}
          content={content}
          onClick={ () => onClick(x, y)}/>
      );
    });
  })

  return (
    <svg viewBox={`0 0 360 360`}>
      <rect x="0" y = "0" width="360" height="360"/>
      { cells }
      { overlay }
    </svg>
  )
}
