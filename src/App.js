import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from 'react-date-picker';
import axios from 'axios';
import Nasa from './components/Nasa/nasa.js';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {

  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());
  let dateQuery = '&date=';
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDay().toString();
  dateQuery = dateQuery + year + '-' + month + '-' + day;
  const url = 'https://api.nasa.gov/planetary/apod?api_key=MvTYifXGaCr3kTNQR1mIh3j4GbHHzKTYjhkMn9gn' + dateQuery;


  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const onChange = (date) => {
    setDate(date);
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [date, url]);

  return (
    <Paper>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Astronomy Picture of the Day" />
            <Tab label="Asteroids" />
          </Tabs>
        </AppBar>
        {
          value === 0 && <TabContainer>
            <div className="App">
              <DatePicker
                onChange={onChange}
                value={date}
                clearIcon={null} />

              <Nasa data={data} />
            </div>
          </TabContainer>
        }
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    </Paper>
  );
}

export default App;
