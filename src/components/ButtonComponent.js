import React from 'react'
import { Link } from 'react-router-dom'
import {Button } from 'react-bootstrap'
import Cookies from 'js-cookie'
function ButtonComponent({ link, text, handleLogout }) {
    
    return (
        <div>
            <Link to={link} >
                <Button className="btn btn-secondary ms-10 bg-light text-black" type="submit" onClick={handleLogout} >{text}</Button>
            </Link>
        </div>
    )
}

export default ButtonComponent
