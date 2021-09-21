import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Child} from './components/Child';

function App() {
  return (
    <div className="App">
    <h1>Hello World</h1>
    <Child name="Billy" id={123} bio="test" />
  </div>
  );
}

export default App;
