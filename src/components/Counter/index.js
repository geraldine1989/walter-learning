
import React, { useEffect } from 'react';
import PropsTypes from 'prop-types';
import './app.scss';
import { Icon } from 'semantic-ui-react';

const Counter = ({ counter, counter2, counter3, color, color2, color3, startTimer, stopTimer }) => {
  useEffect(() => startTimer(), []);
  const handleStop = () => {
    stopTimer();
  };
  const handlePlay = () => {
    startTimer();
  };

  return (
    <div id="counter">
      <h1>Counter tv</h1>
      <div id="counter-content">
        <div id="counter-content-forms">
          <div className="counter-content" style={{ backgroundColor: color }}>
            {counter >= 10 || counter === 0 ? counter : '0' + counter}
          </div>
          <div className="counter-content" style={{ backgroundColor: color2 }}>
            {counter2 >= 10 || counter2 === 0 ? counter2 : '0' + counter2}
          </div>
          <div className="counter-content" style={{ backgroundColor: color3 }}>
            {counter3 >= 10 || counter3 === 0 ? counter3 : '0' + counter3}
          </div>
        </div>
        <div id="counter-content-buttons">
            <button onClick={handleStop}><Icon className="pause"/></button>
            <button onClick={handlePlay}><Icon className="play"/></button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropsTypes.number.isRequired,
  counter2: PropsTypes.number.isRequired,
  counter3: PropsTypes.number.isRequired,
  color: PropsTypes.string.isRequired,
  color2: PropsTypes.string.isRequired,
  color3: PropsTypes.string.isRequired,
  startTimer: PropsTypes.func.isRequired,
  stopTimer: PropsTypes.func.isRequired,
};

export default Counter;
