import React from 'react'
import { Container } from 'react-bootstrap'
import BannerComponent from '../components/BannerComponent'
function MainScreen() {
    return (
        <div>
            <BannerComponent path1={'/'} text1={'Logout'}/>
            <Container className='main'>
                <h1>
                    Hello This is registered web page.
                    
                </h1>
                <h4>Welcome You are successfully Logged in</h4> 
            </Container>
        </div>
    )
}

export default MainScreen
