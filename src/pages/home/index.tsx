import React, { useEffect } from 'react'
import { ComboMaker, SettingMode } from '../../services/combomaker';
import { useTheCoach } from '../../services/coach';

// default constants
const ROUNDS = 3;
const DEFAULT_MODE = 'rookie' as SettingMode;

export const Home = () => {
    // pull data off the url
    const urlParams = new URLSearchParams(window.location.search);

    // sanitize the params
    const _sanitizeParam = (urlParam: string) => { 
        const _mode = urlParams.get(urlParam) as unknown;
        
        const isMode = (mode: unknown): mode is SettingMode => {
            return mode === 'rookie' || mode === 'semipro' || mode === 'pro';
        }
        if (isMode(_mode)) {
            return _mode;
        } else {
            return DEFAULT_MODE;
        }
    }

    

    // setup state using params or defaults
    const [rounds, setRounds]           = React.useState(Number(urlParams.get('rounds')) || ROUNDS);
    const [intensity, setIntensity]     = React.useState<SettingMode>(_sanitizeParam('intensity'));
    const [difficulty, setDifficulty]   = React.useState(_sanitizeParam('difficulty'));
    const [cadence, setCadence]         = React.useState(_sanitizeParam('cadence'));
    
    //build the combo maker
    const combinationObject = new ComboMaker().start(rounds, intensity, difficulty, cadence);
    const {coachingWords, combinationNumbers, combinations, setStart} = useTheCoach(combinationObject);

    useEffect(() => { 
        setStart(true)
        console.log('coachingWords', coachingWords)
    }, [setStart])

    useEffect(() => { 
        console.log('coachWords', coachingWords)
    }, [coachingWords])

    useEffect(() => {
        console.log('combinationNumbers', combinationNumbers)
    }, [combinationNumbers])

    useEffect(() => { 
        console.log('combinations', combinations)
    }, [combinations])

    return (
        <div>
        <h1>Home</h1>
        <p>hi there</p>
        <p>{coachingWords[coachingWords.length -1 ]}</p>
        </div>
    )
}

export default Home