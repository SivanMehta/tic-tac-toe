import React from 'react';
import { useGame } from './constants.jsx';

export default function GameOver() {
  const [ {over} ] = useGame();
  const [winner, type, location] = over;

  let specs = {};

  if(type == 'vertical') {
    specs = {
      height: 300,
      width: 10,
      y: 30,
      x: location * 120 + 57.5
    };
  } else if(type == 'horizontal') {
    specs = {
      height: 10,
      width: 300,
      y: location * 120 + 60,
      x: 30
    };
  } else if(type == 'diagonal') {
    specs = {
      height: 424,
      width: 10,
      y: 30,
      x: -5,
      className: location ? 'left' : 'right'
    };
  }

  return (
    <rect {...specs } className={"strikethrough " + specs.className}/>
  )
}