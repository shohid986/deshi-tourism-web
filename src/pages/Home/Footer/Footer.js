import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className="bg-dark py-5">
            <div className="container">
                <Row className="container py-3 ms-0 text-start">
                    <Col className="mb-3">
                        <p className="text-white fw-bold fs-5"><span className="border-bottom border-3 border-success">HEAD</span>QUARTERS</p>
                        <br />
                        <div style={{color:'lightgray'}}>
                        <p className="mb-1">{location} 21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</p>
                        <p className="mb-1">support@healthocarebd.com</p>
                        <p>01 800 688 8688</p>
                        </div>
                        <h4 className="border border-success border-2 d-inline p-2"><span className="text-info">Healtho</span> <span className="text-white">Care</span> <span className="text-info">BD</span></h4>
                    </Col>
                    <Col className="ms-5">
                        <p className="text-white fw-bold fs-5 ms-5"><span className="border-bottom border-3 border-success">Ser</span>vices</p>
                        <br />
                        <div className="ms-5" style={{color:'lightgray'}}>
                            <ul>
                                <li>Lab Test Department.</li>
                                <li>Cardiology Department.</li>
                                <li>Neurology Department.</li>
                                <li>Dental Department.</li>
                                <li>Orthopedic Department.</li>
                                <li>Emergency Department.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="ms-5">
                        <p style={{color:'lightgray'}}><span className="border-bottom border-3 border-success">Sign up</span> to receive the latest articles</p>
                        <div>
                            <form>
                                <input className="border-0 mb-3 p-3 pe-5" placeholder="Enter Your Email" type="email" />
                                <br />
                                <input className="border-0 mb-3 p-3 pe-5" placeholder="Enter Your Password" type="password" name="" id="" />
                                <br />
                                <input className="px-3 py-2 text-white bg-info fw-bold border-0" type="submit" value="SIGN UP" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;