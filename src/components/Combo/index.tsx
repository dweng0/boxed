import { Combination } from "../../domain/combination";
import { useEffect } from "react";
import  Card from '../Card';

interface CombinationDetails {
    combination: Combination,
    isAttacking: boolean,
    dispatcher: any
}

const CADENCE_FLOOR = 1000; 
const PUNCH_MAP = ['','jab', 'punch', 'hook', 'hook', 'uppercut', 'uppercut'];
const DEFEND_MAP = ['', 'weave', 'weave', 'block', 'block', 'sideblock', 'sideblock'];

const CombinationDisplay: React.FunctionComponent<CombinationDetails> = (props) => { 

    const { dispatcher, combination } = props;

    useEffect(() => { 
        const timeout = setTimeout(() => {
            dispatcher('increment');
        }, combination.cadence + CADENCE_FLOOR);
        return () => clearTimeout(timeout);

    }, [combination, dispatcher]);

    const getText = (isAttacking: boolean, moveNumber: number) => {
        return isAttacking ? PUNCH_MAP[moveNumber] : DEFEND_MAP[moveNumber]
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