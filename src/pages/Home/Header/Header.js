import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home"><h4 className="border border-success border-2 d-inline p-2"><span className="text-info">Healtho</span> <span className="text-white">Care</span> <span className="text-info">BD</span></h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                ></Nav>
                <Nav className="text-bold">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;