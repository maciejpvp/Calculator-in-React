import React, { FC } from 'react';
import './App.scss';
import CalcButton from './components/CalcButton';
import Draggable from 'react-draggable';

const App: FC = () => {
  return (
    <div className="App">
      <Draggable>
        <CalcButton></CalcButton>
      </Draggable>
    </div>
  );
}

export default App;


//NOWE