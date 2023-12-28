import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '.././App.scss';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('error');
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key;

    if (!isNaN(Number(key)) || key === '/' || key === '*' || key === '-' || key === '+') {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleCalculate();
    } else if (key === 'c') {
      handleClear();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]); // Dodaj input do zależności, aby uniknąć ostrzeżeń ESLint

  return (
    <Draggable>
      <div className='MainCalc'>
        <div className='titlebar'>
          <span>Calculator</span>
        </div>
        <div className='InputContainer'>
          <span>{input}</span>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </Draggable>
  );
};

export default Calculator;
