import React from 'react';
import { useGame } from './constants';

export default function Board() {
  const [ state, setState ] = useGame();
  return (
    <pre>
      { JSON.stringify(state, null, 2) }
    </pre>
  )
}