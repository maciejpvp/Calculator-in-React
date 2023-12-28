import React, { FC } from 'react';
import './App.scss';
import Calculator from './components/Calculator';
import Draggable from 'react-draggable';

const App: FC = () => {
  return (
    <div className="App">
      <Draggable>
        <Calculator></Calculator>
      </Draggable>
    </div>
  );
}

export default App;


//NOWE