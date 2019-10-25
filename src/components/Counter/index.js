
import React from 'react';
import PropsTypes from 'prop-types';
import './app.scss';

const Counter = ({ counter, timer }) => {
  
  const handletimer = () => {
    timer();
  }
  
  return (
    <div id="counter">
      <div id="counter-content" onClick={handletimer}>{counter} Cliquez moi</div>
  
    </div>
  );

} 

Counter.propTypes = {
  counter: PropsTypes.number.isRequired,
};

export default Counter;
