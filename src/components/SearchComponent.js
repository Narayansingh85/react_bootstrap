import React from 'react'
import { Container, Form, InputGroup, FormControl } from "react-bootstrap"
function SearchComponent({ text, plc , setSearch1,setSearch2}) {

// Function To Search
  const handleChange = (e)=>{
    const val = e.target.value
    const valLow = val.toLowerCase()
    text==='Name'?setSearch1(valLow):setSearch2(valLow)
  }
  // const fetchUsers = async () => {
  //   const res = await fetch("http://localhost:5000/data")
  //   const data = await res.json()
  //   return data

  // }



  return (
    <Container className="row  col-sm-4">
      <Form className="d-flex">
        <InputGroup className="form-control me-sm-2" type="text" placeholder="Search" onChange={handleChange}>
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
