export interface Combination {
    combinations: number[],
    cadence: number;
    isAttack: boolean;
  }

export default interface Instructor {
  combinations: Array<Combination>,
  tactics: Tactics
}

export interface TacticalDetail {
    restPeriod: number,
}
export interface Tactics {
    rounds: number,
    restPeriod: number,
}