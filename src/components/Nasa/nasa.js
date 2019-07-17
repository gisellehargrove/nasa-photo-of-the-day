import React, { useState } from 'react';
import APOD from '../APOD/apod.js';

function Nasa(props) {
  const [data, setData] = useState(props);

  return (
    <div className="nasa-container">
      Nasa Component
      <div className="title-container">
        <h1 className="title">{props.data.title}</h1>
      </div>

      <APOD data={props.data} />
      <div className="explanation-container">
        <p className="explanation">
          {props.data.explanation}
        </p>
      </div>
      <div className="date-container">
        <span className="date">{props.data.date}</span>
      </div>
    </div>
  )
};

export default Nasa;
