import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';

const Header = ({ text }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Last releases</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Thriller</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Family</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mr-2">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="ml-4" controlId="formBasicPassword">
            <Form.Label className="mr-2">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>

        <Form inline className="ml-5">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <h1 className="ml-3 mt-2">{text || null}</h1>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
