import { Combination } from "./combination"
import { Tactics } from "./tactics"

export default interface Instructor {
  combinations: Array<Combination>,
  tactics: Tactics
}