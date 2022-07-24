import Instructor from '../../domain/instructor';
import { Combination } from '../../domain/combination';

//Generate code from the lexer
export class ComboMaker {

    /**
     * Creates an array of combinations
     * @param combinationNumber 
     */
    createCombinations(combinationNumber: number): Array<Combination> {
        var combinations = []

        for(var i = 0; i < combinationNumber; i++) {

            //grab the previous number so that we never provide the same combos in a row
            let previousNumberOdd = 0;
            let previousNumberEven = 0;

            const prev = i -1;
            if(combinations[prev]){
                previousNumberEven = combinations[prev].even;
                previousNumberOdd = combinations[prev].odd;
            }
          
            //get random numbers, making a note of the previous number (so we dont return that.)
            const odd = this.randomOdd(previousNumberOdd);
            const even = this.randomEven(previousNumberEven);
            const cadence = this.randomCadence();

            //spread into a new Combination object
            const combination: Combination = {
               odd,
               even,
               cadence
            };

            combinations.push(combination);
        }
        return combinations;
    }

    /**
     * generate a random cadence in milli seconds
     */
    randomCadence(): number {
        return this.randomNumber(1000, 1700, 0);
    }

    randomOdd(previous: number): number {
        var randomisedNumber = this.randomNumber(1, 5, previous);
        return (randomisedNumber % 2 === 0) ? randomisedNumber + 1 : randomisedNumber;
    }
    
    randomEven(previous: number): number {
        var randomisedNumber = this.randomNumber(1, 5, previous);
        return (randomisedNumber % 2 === 0) ? randomisedNumber : randomisedNumber + 1;
    }

    /**a
     * Generate a random number between min and max, inclusive
     * @param min 
     * @param max 
     */
    randomNumber(min: number, max: number, previous: number): number { 
        const randomise = () => Math.floor(Math.random() * (max - min + 1) ) + min
        let random = randomise();
        while(random === previous) {
            random = randomise();
        }
        return random;
    }
              
    /**
     * Entry point for the combo maker class
     * @param numberOfRounds number of rounds to create
     * @param difficulty determines cadence and rest periods
     */
    start(numberOfRounds: number, comboNumber: number): Instructor {
        //fill up the instructor
    
        return {
            combinations: this.createCombinations(comboNumber),
            tactics: {
                  rounds: numberOfRounds,
                    offense: {
                        duration: 1,
                        cadence: 3
                    }, 
                    defense:{
                          duration: 1,
                        cadence: 3
                    }
            }
        }
    }
 }

 
