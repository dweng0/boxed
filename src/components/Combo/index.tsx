import { Combination } from "../../domain/combination";
import { useEffect } from "react";
import  Card from '../Card';
import useSound from 'use-sound';

interface CombinationDetails {
    combination: Combination,
    isAttacking: boolean,
    dispatcher: any
}

const CADENCE_FLOOR = 500; 
const PUNCH_MAP = ['','jab', 'punch', 'hook', 'hook', 'uppercut', 'uppercut'];
const DEFEND_MAP = ['', 'weave', 'weave', 'block', 'block', 'sideblock', 'sideblock'];

const CombinationDisplay: React.FunctionComponent<CombinationDetails> = (props) => { 

    const { dispatcher, combination } = props;
    //const sounds: any = useSoundController();
    const [play, {stop}] = useSound('/resources/boxingsprite.mp3', { 
        volume: 0.5,
        sprite: {
            onetwo: [0, 756],
            onefour: [892, 756],
            onesix: [1882, 756],
            threetwo: [2892, 800],
            threefour: [3868, 800],
            threesix: [4876, 800],
            fivetwo: [6363, 800],
            fivefour: [7392, 800],
            fivesix: [8391, 800],

        }
    });

    const playSound = (combination:Combination) => {
        const oddText = getOddAsText(combination.odd);
        const evenText = getEvenAsText(combination.even);
       
        try {
          play({id: `${oddText}${evenText}`});
        }
        catch {
            console.log(`no sound for ${oddText}${evenText}`)
        }
        
    }
   
   
    useEffect(() => { 
        playSound(combination);
        const timeout = setTimeout(() => {
            dispatcher('increment');
        }, combination.cadence + CADENCE_FLOOR);

        return () => {
            stop();
            clearTimeout(timeout)
        };

    }, [combination, dispatcher]);

    const getText = (isAttacking: boolean, moveNumber: number) => {
        return isAttacking ? PUNCH_MAP[moveNumber] : DEFEND_MAP[moveNumber]
    }

    const getOddAsText = (odd: number) => {
        switch (odd) {
            case 1:
                return 'one';
            case 3:
                return 'three';
            case 5:
                return 'five';
            default:
                return 'one';
        }
    }


    const getEvenAsText = (even: number) => {
        //purposley capitalize the first character
        switch (even) {
            case 2:
                return 'two';
            case 4:
                return 'four';
            case 6:
                return 'six';
            default:
                return 'two';
        }
    }

 
    return (
        <div className="row"> 
            <div className="col">
                <h1 className="text-center battle-text">{getText(props.isAttacking, combination.odd)}</h1>
                <Card punchNumber={combination.odd}/>
            </div>
            <div className="col">
                <h1 className="text-center battle-text">{getText(props.isAttacking, combination.even)}</h1>
                <Card punchNumber={combination.even}/>
            </div>
        </div>
    );
}
export default CombinationDisplay;
