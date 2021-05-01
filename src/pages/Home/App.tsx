import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComboMaker } from '../../services/combomaker';

function Home() {
    var results = new ComboMaker().start(3, 30);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>
            {JSON.stringify(results)}
        </pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
