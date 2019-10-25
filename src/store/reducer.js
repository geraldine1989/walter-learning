/**
 * Initial State
 */
const initialState = {
  counter: 40,
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
  switch (action.type) {
  
    case TIMER:
      return {
        ...state,
        counter: state.counter - 1,
      };

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
