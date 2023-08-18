import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navBar.css'
import logo from '../../images/Mixology1.png'

const NavigationBar = () => {
  return (

    <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    style={{ background: 'linear-gradient(to bottom, #445069, #252B48)' }}
    >
      <Navbar.Brand href="#home">
      <img src={logo}
      alt='logo'
      style={{ width: '300px', height: 'auto' }}
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="cocktails">Cocktails</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default NavigationBar;
