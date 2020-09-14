import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div data-testid="counter">{ counter }</div>
      <button
        onClick={() => { setCounter(counter + 1); }}
        data-testid="increment-btn"
      >
        Increment
      </button>
    </div>
  );
}

export default App;
