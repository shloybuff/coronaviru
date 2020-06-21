import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Case = (props) => {
    return(
    <CardDeck>
  <Card
   bg='secondary' style={{color:'white'}}  className="text-center">
    <Card.Body>
      <Card.Title> <strong>Cases</strong></Card.Title>
      <Card.Text>
        {props.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card
   bg='danger' style={{color:'white'}} className="text-center" >
    <Card.Body >
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {props.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card
   bg='info' style={{color:'white'}} className="text-center" >
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
      {props.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
)
} 