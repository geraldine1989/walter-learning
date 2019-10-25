/**
 * Initial State
 */
const initialState = {
  counter: 40,
  color: 'blue',
};

/**
 * Types
 */
const TIMER = 'TIMER';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {

  const {counter} = state;

  switch (action.type) {
  
    case TIMER:
      if (counter > 20) {
        return {
          ...state,
          color: 'blue',
          counter: state.counter - 1,
        }
      } else if (counter > 12 ) {
        return {
          ...state,
          counter: state.counter - 1,
          color: 'orange',
        }
      }
      else if (counter > 0 ) {
        return {
          ...state,
          counter: state.counter - 1,
          color: 'red',
        }
      }
      return {
        ...state,
        counter: 0,
      }
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const timer = () => ({
  type: TIMER,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
