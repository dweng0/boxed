import Instructor, { Combination, Tactics } from "./interface";

export type SettingMode = 'rookie' | 'semipro' | 'pro';

//Generate code from the lexer
export class ComboMaker {
  
    // number of combinations based on the difficulty
    MIN_ROOKIE_COMBO_NUMBER = 10;
    MAX_ROOKIE_COMBO_NUMBER = 20;

    MIN_SEMIPRO_COMBO_NUMBER = 30;
    MAX_SEMIPRO_COMBO_NUMBER = 60;

    MIN_PRO_COMBO_NUMBER = 60;
    MAX_PRO_COMBO_NUMBER = 120;

    // cadence based on the difficulty in ms
    MIN_ROOKIE_CADENCE = 1000;
    MAX_ROOKIE_CADENCE = 2500;

    MIN_SEMIPRO_CADENCE = 750;
    MAX_SEMIPRO_CADENCE = 2000;
    
    MIN_PRO_CADENCE = 500;
    MAX_PRO_CADENCE = 1500;

    // rest period between rounds
    ROOKIE_REST_PERIOD = 30000;
    SEMI_PRO_REST_PERIOD = 15000;
    PRO_REST_PERIOD = 8000;

    //percentage at which the next combo will be an attack
    ROOKIE_OFFENSIVE_YIELD = 95;
    SEMI_PRO_OFFENSIVE_YIELD = 90;
    PRO_OFFENSIVE_YIELD = 80;
    
    /**
     * Creates an array of combinations
     * @param combinationNumber 
     */
    createCombinations(comboMode: SettingMode, cadenceMode: SettingMode, difficultyMode: SettingMode): Array<Combination> {
        var combinations = []

        const combinationNumber = comboMode === 'rookie' ? 
        this.randomNumber(this.MIN_ROOKIE_COMBO_NUMBER, this.MAX_ROOKIE_COMBO_NUMBER, 0) 
        : comboMode === 'semipro' ? this.randomNumber(this.MIN_SEMIPRO_COMBO_NUMBER, this.MAX_SEMIPRO_COMBO_NUMBER, 0)  
        :  this.randomNumber(this.MIN_PRO_COMBO_NUMBER, this.MAX_PRO_COMBO_NUMBER, 0);

        for(var i = 0; i < combinationNumber; i++) {

            //grab the previous number so that we never provide the same combos in a row
            let previousNumberOdd = 0;
            let previousNumberEven = 0;

            const prev = i -1;
            if(combinations[prev]){                
                previousNumberEven = combinations[prev].combinations[0];
                previousNumberOdd = combinations[prev].combinations[1];
            }
          
            //get random numbers, making a note of the previous number (so we dont return that.)
            const odd = this.randomOdd(previousNumberOdd);
            const even = this.randomEven(previousNumberEven);
            const cadence = this.randomCadence(cadenceMode);

            // rookie combos
            const combos = [odd, even]

            // optionally semi pro combos
            if(difficultyMode === 'semipro' && this.percentageBasedRandom(70)) {
                const semiProOdd = this.randomOdd(0);
                combos.push(semiProOdd);
            }

            // optionally pro combos
            if(difficultyMode === 'pro') {
                if(this.percentageBasedRandom(90)) {
                    const semiProOdd = this.randomOdd(0);
                    combos.push(semiProOdd);

                    if(this.percentageBasedRandom(80)) {
                        const proEven = this.randomEven(0);
                        combos.push(proEven);
                    }
                }             
            }

            //spread into a new Combination object
            const combination: Combination = {
               combinations: combos,
               cadence,
               isAttack: this.percentageBasedRandom(difficultyMode === 'pro' ? this.PRO_OFFENSIVE_YIELD : difficultyMode === 'semipro' ? this.SEMI_PRO_OFFENSIVE_YIELD : this.ROOKIE_OFFENSIVE_YIELD)               
            };

            combinations.push(combination);
        }
        return combinations;
    }

    /**
     * generate a random cadence in milli seconds
     */
    randomCadence(mode: SettingMode): number {
        return mode === 'rookie' ? this.randomNumber(this.MIN_ROOKIE_CADENCE, this.MAX_ROOKIE_CADENCE, 0)
        : mode === 'semipro' ? this.randomNumber(this.MIN_SEMIPRO_CADENCE, this.MAX_SEMIPRO_CADENCE, 0) 
        : this.randomNumber(this.MIN_PRO_CADENCE, this.MAX_PRO_CADENCE, 0);
    }

    randomOdd(previous: number): number {
        var randomisedNumber = this.randomNumber(1, 5, previous);
        return (randomisedNumber % 2 === 0) ? randomisedNumber + 1 : randomisedNumber;
    }
    
    randomEven(previous: number): number {
        var randomisedNumber = this.randomNumber(1, 5, previous);
        return (randomisedNumber % 2 === 0) ? randomisedNumber : randomisedNumber + 1;
    }

    percentageBasedRandom = (offensiveYield: number): boolean => (Math.floor(Math.random() * 100) + 1) <= offensiveYield;


    /**
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

    start(numberOfRounds: number, intensity: SettingMode, difficulty: SettingMode, cadence: SettingMode): Instructor {
        return { 
            combinations: this.createCombinations(intensity, cadence, difficulty),
            tactics: this.getTactics(numberOfRounds, difficulty)
        }
    }

    getTactics(numberOfRounds: number, difficulty: SettingMode): Tactics {
        return {
            rounds: numberOfRounds,
            restPeriod: this.getDuration(difficulty),
            
        }
    }
    getDuration(difficulty: SettingMode): number {
      return difficulty === 'rookie' ? this.ROOKIE_REST_PERIOD : difficulty === 'semipro' ? this.SEMI_PRO_REST_PERIOD : this.PRO_REST_PERIOD;
    }
 }