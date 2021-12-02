import React from 'react'
import { Container, Form, InputGroup, FormControl } from "react-bootstrap"



function SearchComponent({ text, plc, setSearch1 }) {

  const handleChange = (e) => {
    const val = e.target.value
    const valLow = val.toLowerCase()
    setSearch1(valLow)
  }

  return (
    <Container className={`row  col-sm-4 py-3`}>
      <Form className="d-flex" >
        <InputGroup className="form-control me-sm-2" type="text" placeholder="Search" onChange={handleChange}  >
        <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
        <FormControl
          placeholder={`${plc}`}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
        
      </Form>
    </Container>
  )
}

export default SearchComponent
