import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Country = (props) => {
    return(
    
  <Card
    bg='light' 
    text='black'  
    className="text-center"
    style={{margin:'10px'}}
    >
    <Card.Img variant="top" src={props.flag} />   
    <Card.Body>
      <Card.Title>{props.country}</Card.Title>
      <Card.Text><strong>Cases: </strong> {props.casesCountry}</Card.Text>
      <Card.Text><strong>Deaths: </strong> {props.deathsCountry}</Card.Text>
      <Card.Text><strong>Recovered: </strong>{props.recoveredCountry}</Card.Text>
      <Card.Text><strong>Today's Cases: </strong>{props.todaycasesCountry}</Card.Text>
      <Card.Text><strong>Today's Deaths: </strong>{props.todayDeathsCountry}</Card.Text>
      <Card.Text><strong>Active: </strong>{props.activeCountry}</Card.Text>
      <Card.Text><strong>Critical: </strong>{props.criticalCountry}</Card.Text>
    </Card.Body>
  </Card>
  
)
} 