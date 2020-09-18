import React from 'react';
import logo from '../../Images/Logo.png';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div >
        <Container>
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="/home"><img style={{height: '54px', width: '100px'}} src={logo} alt=""/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="/destinationDetails">Destination</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Button href="/login">Login</Button>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </div>
    );
};

export default Header;