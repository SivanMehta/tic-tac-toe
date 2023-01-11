import React, { useState } from 'react';
import { FLOORS } from './constants';
import Elevator from './Elevator';

function Buttons ({setFloor}) {
  return new Array(FLOORS).fill(0).map((_, i) => {
    return (
      <button
        onClick={() => setFloor(i)}
        key={i}
        href="#"
        role="button">{ FLOORS - i }</button>
    )
  });
}

function App() {
  const [floor, setFloor] = useState(FLOORS - 1);

  return (
    <div className="grid">
      <div>
        <Elevator floor={floor}/>
      </div>
      <div className='grid-fluid'>
        <Buttons setFloor={setFloor}/>
      </div>
    </div>
  );
}


export default App;
