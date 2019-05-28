import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import ResultBox from './Components/ResultBox';

function App() {
  return (
    <div className="App">
      <h1 className="title">Tape A Beer Number</h1>
      <Input />
      <ResultBox className="result-box" />
    </div>
  );
}

export default App;
