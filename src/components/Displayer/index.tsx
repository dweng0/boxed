
import Instructor from '../../domain/instructor';
import { useState } from 'react';
import { Combination } from '../../domain/combination';

interface ComboDetails {
    details: Instructor
};

//percentage at which the next combo will be an attack
const OFFENSIVE_YIELD = 70;

const onOffense = (): boolean => (Math.floor(Math.random() * 100) + 1) <= OFFENSIVE_YIELD;

const DisplayField: React.FunctionComponent<ComboDetails> = (props) => {
    const { details } = props;
    const [delta, setDelta] = useState(0);
    const [onOffensive, setOnOffensive] = useState(onOffense());
    
    const getCombo = ():Combination  => {
        return details.offensiveCombinations[delta];
    };

    return (
        <div>
            <p>{onOffense() ? ("Attack"!) : ("Defend!")}</p>
            {JSON.stringify(getCombo())}
        </div>
            
    )
 }

export default DisplayField