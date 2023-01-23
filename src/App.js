import React from 'react';
import Context from './constants';
import Board from './Board';

function App() {
  return (
    <div className="grid">
      <Context>
        <Board />
      </Context>
    </div>
  );
}


export default App;
