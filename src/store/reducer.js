import { START_TIMER } from 'redux-timer';
import { STOP_TIMER } from 'redux-timer';

/**
 * Initial State
 */
const initialState = {
  counter: 40,
  counter2: 45,
  counter3: 50,
  color: '#B5F1FF',
  color2: '#B5F1FF',
  color3: '#B5F1FF',
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

  const { counter, counter2, counter3 } = state;

  switch (action.type) {
  
    case TIMER:
      // all are blue
      if (counter > 20) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
        }
      } 
      // counter1 is orange
      else if (counter > 12 && counter2 > 20 && counter3 > 20) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color: '#FF9274',
        }
      }
      // counter2 is orange
      else if (counter > 12 && counter2 > 12 && counter3 > 20) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color2: '#FF9274',
        }
      }

      // counter1 is red
      else if (counter >0  && counter2 > 12 && counter3 > 20) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color: '#FF5A54',
        }
      }

       // counter3 is orange
       else if (counter > 0  && counter2 > 12 && counter3 > 12) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color3: '#FF9274', 
        }
      }

      // counter2 is red
      else if (counter > 0  && counter2 > 0 && counter3 > 12) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color2: '#FF5A54',
        }
      }

       // counter3 is red
       else if (counter > 0  && counter2 > 0 && counter3 > 0) {
        return {
          ...state,
          counter: state.counter - 1,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
          color3: '#FF5A54',
        }
      }

      else if (counter === 0  && counter2 > 0 && counter3 > 0) {
        return {
          ...state,
          counter: 0,
          counter2: state.counter2 - 1,
          counter3: state.counter3 - 1,
        }
      }

      else if (counter === 0  && counter2 === 0 && counter3 > 0) {
        return {
          ...state,
          counter: 0,
          counter2: 0,
          counter3: state.counter3 - 1,
        }
      }
      return {
        ...state,
        counter: 0,
        counter2: 0,
        counter3: 0,
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
export const startTimer = () => ({
  type: START_TIMER,
  payload: {
    name: 'setTimer',
    action: 'TIMER',
    interval: 1000,
    runImmediately: true,
  }
});

export const stopTimer = () => ({
  type: STOP_TIMER,
  payload: {
    name: 'setTimer',
  }
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
