import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import ResultBox from './Components/ResultBox';
import { sumIsGreater, subsetSums } from './services/divisors';

import {
  compose,
  withState,
  withHandlers,
} from 'recompose'

function App({ handleChange, number, setNumber, sumIsGreater, subsetSums }) {
  return (
    <div className="App">
      <h1 className="title">Tape A Number</h1>
      <Input setValue={handleChange} />
      <ResultBox className="result-box" value={number} onChange={setNumber} sumIsGreater={sumIsGreater} subsetSums={subsetSums} />
      <hr />
      <p className="text">Once upon a time there was a tavern with 1000 beer taps, numbered from 1 to 1000. You were told by a mysterious stranger
      that the best beers are the one with the taps whose number matches those 2 conditions:</p>
      <ul>
        <li className="text">The sum of the divisors (including 1, but not the number itself) of the tap number is greater than tap number itself</li>
        <li className="text">No subset of those divisors sums up to the tap number itself</li>
      </ul>
      <b className="text">The waiter is coming, what is your order?</b>
      <a className="right-note text" href="https://en.wikipedia.org/wiki/Weird_number">check here if you need a hint</a>
    </div>
  );
}

const enhance = compose(
  withState('number', 'setNumber', 0),
  withState('sumIsGreater', 'setSumIsGreater', {}),
  withState('subsetSums', 'setSubsetSums', {}),
  withHandlers({
    handleChange: ({ setNumber, setSumIsGreater, setSubsetSums }) => (value) => {
      setNumber(value)
      const sumIsGreaterObj = sumIsGreater(value)
      setSumIsGreater(sumIsGreaterObj);
      if (sumIsGreaterObj.condition) {
        let res = subsetSums(value, sumIsGreaterObj.divisors);
        setSubsetSums(res)
      }
    },
  })
)


export default enhance(App);
