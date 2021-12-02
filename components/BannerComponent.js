import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ButtonComponent from "./ButtonComponent"
function BannerComponent({path1,path2,text1,text2}) {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Container className="justify-content-center text-blue" >

                <Nav.Item>
                    <h1>Bapple</h1>
                </Nav.Item>

            </Container>
            <ButtonComponent link={path1} text={text1}/>
            {path2?<ButtonComponent link={path2} text={text2}/>:''}        

        </Navbar>
    )
}

export default BannerComponent