
import Instructor from '../../domain/instructor';
import { useReducer } from 'react';
import {ReducerState} from './models';
import reducer from './reducers';
import CombinationDisplay from '../Combo';

export interface ComboDetails {
    details: Instructor
};

//percentage at which the next combo will be an attack
const OFFENSIVE_YIELD = 70;

const onOffense = (): boolean => (Math.floor(Math.random() * 100) + 1) <= OFFENSIVE_YIELD;

const DisplayField: React.FunctionComponent<ComboDetails> = (props) => {
    const { details } = props;

    const getInitialState = (): ReducerState => {
        return { 
            delta: 0,
            combination: details.combinations[0],
            offense: onOffense()
        }
    };

    const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

    return (
        <div>
            <p>{state.offense ? ("Attack"!) : ("Defend!")} [todo styling component]</p>
            <CombinationDisplay combination={details.combinations[state.delta]} dispatcher={dispatch}  />
        </div>
            
    )
 }

export default DisplayField