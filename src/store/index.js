/*
 * Npm import
 */
import { createStore, applyMiddleware, compose  } from 'redux';
import timerMiddleware from 'redux-timer';
/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';

/*
 * Code
 */
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];
const enhancers = compose(applyMiddleware(timerMiddleware), ...devTools)

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;