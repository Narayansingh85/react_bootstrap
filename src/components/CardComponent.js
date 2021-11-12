import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

function CardComponent({name,desc}) {
    return (
        <Card className="py-sm-4 m-4">
            <Card.Body >
                <Card.Title>{name}</Card.Title>
                <Container className="icons">
                <FontAwesomeIcon icon={faUser} className="fa-4x"/>
                </Container>
                <Card.Text  className="icons">
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent



///////////////
















