import React, { useState } from 'react';

function Nasa(props) {
  const [data, setData] = useState(props);

  return (
    <div className="nasa-container">
      Nasa Component
      <div className="title-container">
        <h1 className="title">{props.data.title}</h1>
      </div>
      <div className="img-container">
        <img src={props.data.url}></img>
        <iframe src={props.data.url}></iframe>
      </div>
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
