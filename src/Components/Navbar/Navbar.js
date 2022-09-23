import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {GiShoppingCart} from "react-icons/gi"
import Badge from '@mui/material/Badge';
import { Link, useLocation } from 'react-router-dom'

import "./Navbar.css"
function Topbar({ totalItems }) {
  const location = useLocation();
  
  return (
    <Navbar bg="white" expand="lg" className="sticky-top">
    <Container>
      <Navbar.Brand href="#home">Groover</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto gap-5">

          <Link to="/" className='text-decoration-none'>
          <Nav.Link href="#home">Home</Nav.Link>
          </Link>


          <Nav.Link href="#link">About</Nav.Link>


          <Nav.Link href="#link">Testimonial</Nav.Link>

        <Link to='/cart' className='text-decoration-none text-dark'>
          <Nav.Link href="#link" className="text-dark">Cart</Nav.Link>
          </Link>


        </Nav>


        
        <Link to ="/cart">
        <button className="btn btn-outline-danger" > 
             <GiShoppingCart />
        </button>
        <Badge badgeContent={totalItems} color="secondary"></Badge>
        </Link>

        <button className="btn btn-success shadow ms-3">
          Shop Now
        </button>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Topbar