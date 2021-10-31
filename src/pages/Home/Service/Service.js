import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './Service.css';

const Service = ({service}) => {
    const {_id, name, discription, image} = service;
    const icon = <FontAwesomeIcon icon={faInfoCircle} />
    return (
    <Col>
      <Card className="card-container p-2">
        <Card.Img variant="top" height="220" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {discription}
          </Card.Text>
          <Link to={`/service/${_id}`}><Button>{icon} Purches</Button></Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;