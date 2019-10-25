/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Counter from 'src/components/Counter';

// Action Creators
import { timer, startTimer } from 'src/store/reducer';

/* === State (données) ===

 */
const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  color: state.color,
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
