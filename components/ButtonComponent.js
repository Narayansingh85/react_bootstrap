import React from 'react'
import { Link } from 'react-router-dom'
import {Button } from 'react-bootstrap'
function ButtonComponent({ link, text, addUser }) {
    
    return (
        <div>
            <Link to={link} >
                <Button className="btn btn-secondary ms-10 bg-light text-black" type="submit" >{text}</Button>
            </Link>
        </div>
    )
}

export default ButtonComponent
