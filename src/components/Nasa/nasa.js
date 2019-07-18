import React from 'react';
import APOD from '../APOD/apod.js';
import { Container, Header, Segment, Divider } from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';

function Nasa(props) {

  return (
    <div className="nasa-container">
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          {props.data.title}
        </Typography>
      </Container>

      <Segment>
        <APOD data={props.data} />

        <Divider section />

        <Container>
          <p className="explanation">
            {props.data.explanation}
          </p>
        </Container>

        <Divider section />

        <Container>
          <span className="date">Photo taken on: {props.data.date}</span>
        </Container>
      </Segment>
    </div>
  )
};

export default Nasa;
