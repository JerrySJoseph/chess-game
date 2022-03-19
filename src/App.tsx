import React from 'react';
import './App.css';
import Board from './components/Board/board';
import { GameContextProvider } from './context/gamecontext';

function App() {
  return (
    <GameContextProvider>

      <div className="board-container">
        <Board/>
        </div>
     
    </GameContextProvider>
  );
}

export default App;
