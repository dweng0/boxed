import React from 'react';
import './App.css';
import { ComboMaker } from '../../services/combomaker';
import NumberDisplayer from '../../components/NumberDisplayer';

const Test: React.FunctionComponent = () => {
    var code = new ComboMaker().start(4, 20);
    return (
        <>
        <div className="jumbotron text-center">
            <h1>Test</h1>
            <pre>{JSON.stringify(code)}</pre>
        </div>
        <NumberDisplayer {number}/>
        </>
    )
}

export default Test;
