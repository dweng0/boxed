import { ComboStatus } from "../models/ComboStatus";
import { Action } from "../models/action";

const reducer = (state: ComboStatus , action: Action) => {
  switch (action.type) {
    case 'cadence':
      return ComboStatus.evenHand
    case 'finished':
      return ComboStatus.finished
    default:
      throw new Error();
  }
}

export default reducer