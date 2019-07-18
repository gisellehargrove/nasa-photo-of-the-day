import React from 'react';
import APOD from '../APOD/apod.js';
import { Container, Header, Segment } from 'semantic-ui-react';

function Nasa(props) {

  return (
    <div className="nasa-container">
      <Container>
        <Header as="h1">{props.data.title}</Header>
      </Container>

      <Segment>
        <APOD data={props.data} />
      </Segment>

      <Container>
        <p className="explanation">
          {props.data.explanation}
        </p>
      </Container>

      <Container>
        <span className="date">{props.data.date}</span>
      </Container>
    </div>
  )
};

export default Nasa;
