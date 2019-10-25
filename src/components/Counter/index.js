
import React, { useEffect } from 'react';
import PropsTypes from 'prop-types';
import './app.scss';

const Counter = ({ counter,counter2, counter3, color, color2, color3, startTimer }) => {

  useEffect(() => startTimer(), []);

  return (
    <div id="counter">
      <div id="counter-content" style={{ backgroundColor: color }}>
        {counter}
      </div>
      <div id="counter-content" style={{ backgroundColor: color2 }}>
        {counter2}
      </div>
      <div id="counter-content" style={{ backgroundColor: color3 }}>
        {counter3}
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropsTypes.number.isRequired,
  color: PropsTypes.string.isRequired,
  startTimer: PropsTypes.func.isRequired,
};

export default Counter;
