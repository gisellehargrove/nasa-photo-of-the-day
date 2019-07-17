import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
