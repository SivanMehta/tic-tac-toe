import React from 'react';
import { Link } from 'react-router-dom';

function Landing () {
  return (
    <>
      <h1>Tic Tac Toe!</h1>
      <Link to="/game/123">Play</Link>
    </>
  )
}

export default Landing;