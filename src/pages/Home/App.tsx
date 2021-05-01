import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComboMaker } from '../../services/combomaker';

function Home() {
    var results = new ComboMaker().start(3, 30);

  return (
     <pre>
            {JSON.stringify(results)}
        </pre>
  );
}

export default Home;
