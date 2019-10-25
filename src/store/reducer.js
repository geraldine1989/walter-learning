/**
 * Initial State
 */
const initialState = {
  counter: 40,
  color: '#B5F1FF',
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
          color: '#B5F1FF',
          counter: state.counter - 1,
        }
      } else if (counter > 12 ) {
        return {
          ...state,
          counter: state.counter - 1,
          color: '#FF9274',
        }
      }
      else if (counter > 0 ) {
        return {
          ...state,
          counter: state.counter - 1,
          color: '#FF5A54',
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
