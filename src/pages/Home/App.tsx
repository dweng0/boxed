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
        <NumberDisplayer odd={code.offensiveCombinations[0].odd} even={code.offensiveCombinations[0].even} cadence={200}/>
        </>
    )
}

export default Test;
