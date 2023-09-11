import React, { useState, useEffect } from 'react';
import './bar.css';
import Icon from "./assets/icon.png"

const Bar = (props) => {
  
  const [values, setValues] = useState(props.values);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [condition, setCondition] = useState("Good");
  const [color, setColor] = useState('green');
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= values.length) {
        clearInterval(interval);
        return;
      }
      const currentValue = values[currentIndex];
      const newPercentage = currentValue;
      setPercentage(newPercentage);
      if (newPercentage < 30) {
        setCondition("LOW");
        setColor('red');
      } else if (newPercentage >= 30 && newPercentage <= 70) {
        setCondition("Normal");
        setColor('yellow');
      } else {
        setCondition("Good");
        setColor('green');
      }
      setCurrentIndex(currentIndex + 1);
    }, speed);
    return () => clearInterval(interval);
  }, [currentIndex, values, speed]);

  return (
    <div className="therm-container">
      <div className="battery">

        <div className="battery-rectangle"></div>

      </div>
      <div className="therm">
        <div className="thermometer">
          <div className="mercury" style={{ height: `${percentage}%`, backgroundColor: color }}></div>
          <div className="temperature" style={{
            marginLeft:50
          }} >{percentage}{props.unit}</div>
        </div>
        <h4>{props.title}({props.unit})</h4>
        <div className="condition" style={{ backgroundColor: color }}>{condition}</div>
        <img src={Icon} alt="Battery" className="battery-image" />
      </div>
    </div>
  );
};

export default Bar;
