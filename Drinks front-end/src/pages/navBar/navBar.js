import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './navBar.css'
import logo from '../../images/Mixology1.png'

import { Link } from 'react-router-dom';

const NavigationBar = () => {


  const handleSearch = (e) => {
    e.preventDefault();
    
    const searchTerm = e.target.searchTerm.value;
    console.log(searchTerm)
    if (searchTerm) {
        console.log(searchTerm)
        // Only navigate if the searchTerm is not empty
        return <Link to={`/cocktails/${searchTerm}`}></Link>; // Navigate to the desired route
      }
  };


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
        <Form
          className="d-flex"
          onSubmit={handleSearch}
        >
            <Form.Control
              type="search"
              placeholder="Search for cocktails"
              name="searchTerm"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="outline-success" type="submit">
            Search
            </Button>
          </Form>
      </Navbar.Collapse>
    </Navbar>
    
  );
  
  
};

export default NavigationBar;
