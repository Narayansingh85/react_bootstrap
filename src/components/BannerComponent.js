import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ButtonComponent from "./ButtonComponent"
function BannerComponent() {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Container className="justify-content-center text-blue" >

                <Nav.Item>
                    <h1>India Mart</h1>
                </Nav.Item>

            </Container>
            <ButtonComponent link={'/registration'} text={'Sign Up'}/>
            <ButtonComponent link={'/login'} text={'Login'}/>        

        </Navbar>
    )
}

export default BannerComponent