import React from 'react';
import { FLOORS, FLOOR_HEIGHT } from './constants';

const offset = 20;
const width = 360;

function Pulleys({ floor }) {
  const leftCenter = offset * 2.5 + width / 4;
  return (
    <g>
      {/* left pulley / cable */}
      <circle cx={leftCenter} cy={offset / 2} r={ offset / 2} className="pulley"/>
      <rect className='cable'
        x={leftCenter - offset / 2 - 1}
        y={offset / 2}
        width="2"
        height={floor * FLOOR_HEIGHT + offset / 2} />
      {/* right pulley / cable */}
      <circle cx={width - offset * 1.5} cy={offset / 2} r={ offset / 2 } className="pulley"/>
      <rect className='cable'
        x={width - offset - 1}
        y={offset / 2}
        width="2"
        height={(FLOORS - floor - 1) * FLOOR_HEIGHT + offset / 2} />
      <rect className="counterweight" x={ width - offset * 1.5 } y={ (FLOORS - floor - 1) * FLOOR_HEIGHT + offset } width={ offset } height={FLOOR_HEIGHT} />
    </g>
  )
}

function Labels() {
  return new Array(FLOORS).fill(0).map((_, floor) => (
    <text
      key={`label-${floor}`}
      textAnchor="middle"
      x={ offset }
      y={(floor) * FLOOR_HEIGHT + FLOOR_HEIGHT / 2 + offset} >{ FLOORS - floor }</text>
  ));
}

export default function Elevator({ floor }) {
  return (
    <svg width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2 }>
      <rect className="background" width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2}></rect>
      <rect className="carriage" x={ offset * 2 } y={ floor * FLOOR_HEIGHT + offset } width={ width / 2 } height={FLOOR_HEIGHT} />
      <Labels />
      <Pulleys floor={ floor } />
    </svg>
  )
}