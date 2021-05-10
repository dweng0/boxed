import { Combination } from "../../domain/combination";
import { useEffect } from "react";

interface CombinationDetails {
    combination: Combination,
    dispatcher: any
}

const CADENCE_FLOOR = 1000; 
const CombinationDisplay: React.FunctionComponent<CombinationDetails> = (props) => { 

    const { dispatcher, combination } = props;

    useEffect(() => { 
        console.log('here');
        const timeout = setTimeout(() => {
            dispatcher('increment');
        }, combination.cadence + CADENCE_FLOOR);
        return () => clearTimeout(timeout);

    }, [combination, dispatcher]);

    return (
            <>
            <p>{combination.odd}</p>
            <p>{combination.even}</p>
            </>
    );
}
export default CombinationDisplay;