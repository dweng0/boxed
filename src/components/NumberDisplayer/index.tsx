import React from 'react';
import './App.css';
import { Combination } from '../../domain/combination';

const DisplayCombo: React.FunctionComponent<Combination> = (props) => {
   const { odd, even, cadence} = props;

    return (
        <div className="container">
            <div className="row">
                <h2>{odd}</h2>
                <h2>{even}</h2>
            </div>
        </div>
    )
}

export default DisplayCombo;
