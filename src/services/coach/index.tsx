import React, { useEffect, useReducer } from 'react';
import Instructor from '../combomaker/interface';
import { getRandomizedSentencesToUse } from './coaches_inspiration';

type action = {type: "increment"} | {type: "decrement"}
const initialState  = {count: 0}
const CADENCE_FLOOR = 1000;
const PUNCH_MAP     = ['','jab', 'punch', 'hook', 'hook', 'uppercut', 'uppercut'];
const DEFEND_MAP    = ['', 'weave', 'weave', 'block', 'block', 'sideblock', 'sideblock'];

const reducer = (state = initialState, action: action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            return state
    }
}

export const useTheCoach = (combination: Instructor) => { 
    
    const [start, setStart]                 = React.useState(false);
    const [state, dispatch]                 = React.useReducer(reducer, initialState)
    const [roundComplete, setRoundComplete] = React.useState(false);
    const [coachingWords, addCoachingWords] = React.useState<string[]>([]);
    const [combinations, setCombinations]   = React.useState<string[][]>([]);

    
    const inspirationalWords                = getRandomizedSentencesToUse();
    
    useEffect(() => { 
        if (start) {
            buildCombinations();
            console.log('here');
            const timeout = setTimeout(() => {
                addCoachingWords([...coachingWords, inspirationalWords[Math.floor(Math.random() * inspirationalWords.length)]]);
                dispatch({type: "increment"});
            }, combination.combinations[state.count || 0].cadence + CADENCE_FLOOR);
            return () => clearTimeout(timeout);
        }
    }, [start, state.count])

    // takes the boxing numbers and terms them into words
    const buildCombinations = () => { 
        if(state.count === combination.combinations.length) {
            setStart(false);
            setRoundComplete(true);
            return;
        }
        
        const currentCombo = combination.combinations[state.count || 0];
        console.log('currentCombo', currentCombo)
        if(currentCombo.isAttack) {
            setCombinations([...combinations, [PUNCH_MAP[currentCombo.combinations[0]], PUNCH_MAP[currentCombo.combinations[1]]]]);
        } else { 
            setCombinations([...combinations, [DEFEND_MAP[currentCombo.combinations[0]], DEFEND_MAP[currentCombo.combinations[1]]]]);
        }        
    }

    return { 
        setStart,
        combinations,
        combinationNumbers: combination.combinations[state.count || 0],
        coachingWords,
    }
}