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
            var combination: Combination = {
                odd: this.randomOdd(),
                even: this.randomEven(),
                cadence: this.randomCadence()
            }
            combinations.push(combination);
        }
        return combinations;
    }

    /**
     * generate a random cadence in milli seconds
     */
    randomCadence(): number {
        return this.randomNumber(150, 1500)
    }

    randomOdd(): number {
        var randomisedNumber = this.randomNumber(1, 7);
        return (randomisedNumber % 2 === 0) ? randomisedNumber + 1 : randomisedNumber;
    }
    
    randomEven(): number {
        var randomisedNumber = this.randomNumber(1, 7);
        return (randomisedNumber % 2 === 0) ? randomisedNumber : randomisedNumber + 1;
    }

    /**a
     * Generate a random numbe rbetween min and max, inclusive
     * @param min 
     * @param max 
     */
    randomNumber(min: number, max: number): number { 
        return  Math.floor(Math.random() * (max - min + 1) ) + min;
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

 
