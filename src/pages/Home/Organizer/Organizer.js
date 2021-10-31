import React from 'react';
import { Col } from 'react-bootstrap';

const Organizer = ({provider}) => {
    const {name, serviceProvide, image} = provider;
    return (
        <Col>
            <div>
            <img width="350" height="350" src={image} alt="organizer" />
            </div>
            <div className="my-2">
                <h4>{name} (<p className="d-inline fs-6">{serviceProvide}</p>)</h4>
            </div>
        </Col>
    );
};

export default Organizer;