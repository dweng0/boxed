import { Combination } from "./combination"
import { Tactics } from "./tactics"

export default interface Instructor {
  offensiveCombinations: Array<Combination>,
  defensiveCombinations: Array<Combination>,
  tactics: Tactics
}