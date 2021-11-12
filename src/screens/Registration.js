import React, { useState } from 'react'
import { Container, Button, Navbar, Nav } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import FormComponent from '../components/FormComponent'

function Registration() {
    const history = useHistory();
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        quali: '',
        password: '',
    })

    // Write function to add users
    const addUsers = async (user) => {
        const { fname, lname, email, quali, password } = user;
        const res = await fetch('/registration',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    fname, lname, email, quali, password
                })
            }
        )

        const data = await res.json()
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successfull")
            console.log("Successfull Registration")

            history.push("/login")
        }

    }




    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <Container className="justify-content-between text-blue" >
                    <Nav.Item>
                        <h1>India Mart</h1>
                    </Nav.Item>
                    <Link to="/" className="navbar-right">
                        <Button className="btn btn-secondary ms-10 bg-light text-black" type="submit" >Go Back</Button>
                    </Link>
                </Container>
            </Navbar>
            <FormComponent addUser={addUsers} user={user} setUser={setUser} />

        </>
    )
}
export default Registration
