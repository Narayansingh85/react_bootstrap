import Cookies from 'js-cookie'
import React from 'react'
import { Container } from 'react-bootstrap'
import { withRouter } from 'react-router'
import BannerComponent from '../components/BannerComponent'
import {useDispatch} from 'react-redux'
function MainScreen() {
    const dispatch = useDispatch()
    const handleLogout = (e)=>{
        Cookies.remove("Token")
        dispatch({type:"LOGGED_IN"})
        
    }
    return (
        <div>
            <BannerComponent path1={'/'} text1={'Logout'} handleLogout={handleLogout}/>
            <Container className='main'>
                <h1>
                    Hello This is registered web page.
                </h1>
                <h4>Welcome You are successfully Logged in</h4> 
            </Container>
        </div>
    )
}

export default withRouter(MainScreen);
