
import Instructor from '../../domain/instructor';
import { useReducer, useEffect, useState } from 'react';
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
            combination: details.combinations[0]
        }
    };

    const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

    const jumboTron =() => {
        const result = onOffense();
        return (
            <div className={`text-center`}>
                <h1 style={{fontSize: "8rem"}}>{result ? ("Attack") : ("Defend")}</h1>
            </div>
        );
    }
  
    if(details.combinations[state.delta]) {
        return (
            <>
            <div className="row">
                  <img style={{width: "100%", maxWidth: "350px", margin: "auto"}} src="/resources/logo.png"/>
            </div>
            <div className="row">
                <div className="col">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                  {jumboTron()}
                </div>                
            </div>
            
            <CombinationDisplay combination={details.combinations[state.delta]} dispatcher={dispatch}  />
            </>
        )
    } else {
        return (
               <div className={`jumbotron text-center bg-primary`}>
                <h1>Finished</h1>
            </div>
        )
    }
   
 }

export default DisplayField