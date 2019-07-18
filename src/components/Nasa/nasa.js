import React from 'react';
import APOD from '../APOD/apod.js';
import { Container, Header, Segment, Divider } from 'semantic-ui-react';

function Nasa(props) {

  return (
    <div className="nasa-container">
      <Container>
        <Header as="h1">{props.data.title}</Header>
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
