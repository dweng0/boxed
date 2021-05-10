
import Instructor from '../../domain/instructor';

interface ComboDetails {
    details: Instructor
};

const OFFENSIVE_YIELD = 7;

const onOffense = (): boolean => (Math.floor(Math.random() * OFFENSIVE_YIELD) + 1 <= OFFENSIVE_YIELD);

const DisplayField: React.FunctionComponent<ComboDetails> = (props) => {
    const { details } = props;
    return (
        <div>
            <p> on offense? {onOffense || "yes"}</p>
            {JSON.stringify(details.offensiveCombinations)}
        </div>
            
    )
 }

export default DisplayField