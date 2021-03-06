import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, userLogOut} = useAuth();
    return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home"><h4 className="border border-success border-2 d-inline p-2"><span className="text-info">Tour</span> <span className="text-white">Care</span> <span className="text-info">BD</span></h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                ></Nav>
                <Nav className="text-bold">
                <Nav.Link className="fw-bolder" as={Link} to="/home">Home</Nav.Link>
                {
                    user.email && <><Nav.Link className="fw-bolder" as={Link} to="/myorders">My Orders</Nav.Link>
                    <Nav.Link className="fw-bolder" as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link><Nav.Link className="fw-bolder" as={Link} to="/addservice">Add Service</Nav.Link></>
                }
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="ms-3 header-login-info">
                    {user.email && <span><span className="text-info">Signed in as: </span> <span className="fw-bold text-white text-decoration-underline">{user.displayName}</span></span>}
                </Navbar.Text>
                </Navbar.Collapse>

                {
                    !user.email ? <Link to="/login"><Button className="ms-5 header-login-info">Login</Button></Link> : <Button onClick={userLogOut} className="ms-5 header-login-info">Log Out</Button>
                }
                <Navbar.Toggle />

                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;