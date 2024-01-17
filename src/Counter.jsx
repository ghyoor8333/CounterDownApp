import React, { useState, useEffect } from "react";
import "./Counter.css";
const Counter = () => {
  const [initialTime, setInitialTime] = useState(200); // Initial countdown time in seconds (5 minutes)
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the countdown timer logic
  useEffect(() => {
    let timer;

    if (isRunning && currentTime > 0) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, currentTime]);

  // Function to start/stop the countdown timer

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

 

  // Function to handle input change for setting countdown time

  const handleInputChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setInitialTime(newTime);
    setCurrentTime(newTime);
  };

  return (
    <div className="Timer">
      <div className="container">
        <div className="Input">
          <label>Set Countdown Time (seconds):</label>
          <input
            className="input"
            type="number"
            value={initialTime}
            onChange={handleInputChange}
            disabled={isRunning}
          />
        </div>
        <div>
          <h3>Current Time:<span className="counter"> {currentTime}</span> seconds</h3>
          <button className="btn" onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;
