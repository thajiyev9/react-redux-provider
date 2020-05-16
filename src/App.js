import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {changeText} from './redux/action'

function App() {
  const text = useSelector(state => state.test);
  const dispatch = useDispatch();
  const onClick = e => {
      e.preventDefault();
      changeText(dispatch, 'dgfddf')


  }
  return (
    <div className="App">
      <header className="App-header">
         {text}
         <button onClick={onClick}></button>
      </header>
    </div>
  );
}

export default App;
