import React from 'react';
import Board from './components/board';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='title-bar'>Mellow</div>
      {<Board />}
    </div>
  );
}

export default App;
