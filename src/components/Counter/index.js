
import React, { useEffect } from 'react';
import PropsTypes from 'prop-types';
import './app.scss';

const Counter = ({ counter, color, startTimer }) => {

  useEffect(() => startTimer(), []);

  return (
    <div id="counter">
      <div id="counter-content" style={{ backgroundColor: color }}>
        {counter}
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
