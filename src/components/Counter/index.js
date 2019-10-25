
import React from 'react';
import PropsTypes from 'prop-types';
import './app.scss';

const Counter = ({ counter, timer, color, startTimer }) => {
  
  const handletimer = () => {
    startTimer();
  }

  return (
    <div id="counter">
          <div id="counter-content" onClick={handletimer} style={{
        backgroundColor: color}}>Click me : {counter}</div>
    </div>
  );

} 

Counter.propTypes = {
  counter: PropsTypes.number.isRequired,
};

export default Counter;
