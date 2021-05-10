import { ReducerState } from '../models/index';

const reducer = (state: ReducerState, action: string) => {
  switch (action) {
    case 'increment':
      return {...state, ...{ delta: state.delta + 1}};
    case 'decrement':
      return {...state, ...{ delta: state.delta - 1}};
    default:
      throw new Error('No action type provided');
  }
}
export default reducer;