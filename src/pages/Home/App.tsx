import React from 'react';
import './App.css';
import { ComboMaker } from '../../services/combomaker';
import Displayer from '../../components/Displayer';

const Test: React.FunctionComponent = () => {
    var code = new ComboMaker().start(4, 60);
    return (
        <Displayer details={code} />
    )
}

export default Test;
