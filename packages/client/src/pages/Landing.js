import React from 'react';
import { Link } from 'react-router-dom';

function Landing () {
  return (
    <>
      <h1>Tic Tac Toe!</h1>
      <ul>
        <li><Link to="/game/123">Play</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </>
  )
}

export default Landing;