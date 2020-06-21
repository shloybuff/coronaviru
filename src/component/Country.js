import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Country = (props) => {
    return(
    
  <Card
    bg='light' 
    text='black'  
    className="text-center"
    >
    <Card.Img variant="top" src={props.flag} />   
    <Card.Body>
      <Card.Title>{props.country}</Card.Title>
      <Card.Text>Cases: {props.casesCountry}</Card.Text>
      <Card.Text>Deaths: {props.deathsCountry}</Card.Text>
      <Card.Text>Recovered: {props.recoveredCountry}</Card.Text>
      <Card.Text>Today's Cases: {props.todaycasesCountry}</Card.Text>
      <Card.Text>Today's Deaths: {props.todayDeathsCountry}</Card.Text>
      <Card.Text>Active: {props.activeCountry}</Card.Text>
      <Card.Text>Critical: {props.criticalCountry}</Card.Text>
    </Card.Body>
  </Card>
  
)
} 