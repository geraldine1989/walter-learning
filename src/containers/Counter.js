/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Counter from 'src/components/Counter';

// Action Creators
import { timer } from 'src/store/reducer';

/* === State (données) ===

 */
const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  timer: () => {
    dispatch(timer());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = createContainer(Counter);
*/

/**
 * Export
 */
export default CounterContainer;
