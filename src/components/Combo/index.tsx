import { Combination } from "../../domain/combination";
import { useEffect } from "react";
import  Card from '../Card';

interface CombinationDetails {
    combination: Combination,
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

    const asRandom = (type: number) => {
        return `/resources/${PUNCH_MAP[type]}-${Math.floor(Math.random() * 3) + 1}.PNG`;
    }

    return (
        <div className="row"> 
            <div className="col">
                <h3 className="text-center">Primary Hand</h3>
                <Card punchNumber={combination.even}/>
            </div>
            <div className="col">
                <h3 className="text-center">Off Hand</h3>
                 <Card punchNumber={combination.odd}/>
            </div>
        </div>
    );
}
export default CombinationDisplay;