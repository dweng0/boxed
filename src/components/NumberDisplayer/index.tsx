import React, { useReducer } from 'react';
import { ComboStatus } from './models/ComboStatus';
import { Details } from './models/details';
import reducer from './hooks/reducer';

const DisplayCombo: React.FunctionComponent<Details> = (props) => {
    const { odd, even, cadence} = props;
    const [state, dispatch] = useReducer(reducer, ComboStatus.evenHand);
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
