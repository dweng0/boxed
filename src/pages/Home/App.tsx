import React from 'react';
import './App.css';
import { ComboMaker } from '../../services/combomaker';
import Displayer from '../../components/Displayer';

const Test: React.FunctionComponent = () => {
    var code = new ComboMaker().start(4, 60);
    return (
        <>
        <div className="jumbotron text-center">
            <h1>Test</h1>
            <pre>{JSON.stringify(code)}</pre>
        </div>
        <Displayer details={code} />
        </>
    )
}

export default Test;
