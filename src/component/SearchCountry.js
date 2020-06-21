import React from 'react'
import { Form } from 'react-bootstrap'

export const SearchCountry = (props) => {
    return(
  <Form.Group controlId="formBasicEmail" style={{margin:'10px'}}>
    <Form.Control type="text" placeholder="Search for a country" onChange={props.search} />
  </Form.Group>
    )
}