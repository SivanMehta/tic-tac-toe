import React from 'react';
import Context from './constants.jsx';
import Board from './components/Board.jsx';
import Message from './components/Message.jsx';

function App() {
  return (
    <div className="grid">
      <Context>
        <Board />
        <Message />
      </Context>
    </div>
  );
}


export default App;
