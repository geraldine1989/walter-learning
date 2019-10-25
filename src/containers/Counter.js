/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Counter from 'src/components/Counter';

// Action Creators
import { timer, startTimer, stopTimer } from 'src/store/reducer';

/* === State (données) ===

 */
const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  counter2: state.counter2,
  counter3: state.counter3,
  color: state.color,
  color2: state.color2,
  color3: state.color3,
});

/* === Actions ===
 
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  timer: () => {
    dispatch(timer());
  },
  startTimer: () => {
    dispatch(startTimer());
  },
  stopTimer: () => {
    dispatch(stopTimer());
  },
  
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);


/**
 * Export
 */
export default CounterContainer;
