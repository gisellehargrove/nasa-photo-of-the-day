import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from 'react-date-picker';
import axios from 'axios';
import Nasa from './components/Nasa/nasa.js';

function App() {

  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());
  let dateQuery = '&date=';
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDay().toString();
  dateQuery = dateQuery + year + '-' + month + '-' + day;
  const url = 'https://api.nasa.gov/planetary/apod?api_key=MvTYifXGaCr3kTNQR1mIh3j4GbHHzKTYjhkMn9gn' + dateQuery;

  const onChange = (date) => {
    setDate(date);
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [date, url]);

  return (
    <div className="App">
      <DatePicker onChange={onChange} value={date} />
      <Nasa data={data} />
    </div>
  );
}

export default App;
