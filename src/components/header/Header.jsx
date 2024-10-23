import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import  '../../index.css'
import { Link } from 'react-router-dom';
import { useState } from "react";



const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);      // Close navbar on link click
  const handleToggle = () => setExpanded(!expanded); // Toggle navbar


  return (
    <>
      <Navbar  expanded={expanded}  bg="white" data-bs-theme="light" className="pt-4  d-none d-lg-flex">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={handleToggle}/>
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto flex-grow-1 justify-content-center fs-5 pb-4">
          <Nav.Link as={Link} to="/" className="nav-link">الصفحة الرئيسية</Nav.Link>
              <Nav.Link as={Link} to="/doctors" className="nav-link"    >الأطباء</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link" >الخدمات</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link" >تواصل معنا</Nav.Link>


          </Nav>
          </Navbar.Collapse >
          <Link to="/booking">
          <Button  className="p-3 fs-5 " variant="primary" as="input" type="button" value="احجز موعد عبر الأنترنت" />{' '}
          </Link>
        </Container>
      </Navbar>



      {/* Navbar for Mobile */}
      <Navbar bg="white" className="d-lg-none" expand="lg"  expanded={expanded}>
        <Container  >
          <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="mobile-navbar-nav"  className="custom-toggle " onClick={handleToggle } />
          <Navbar.Collapse id="mobile-navbar-nav h-50">
            <Navbar className="me-auto  d-flex flex-column justify-content-between p-5 gap-4 align-items-end">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={handleClose}>الصفحة الرئيسية</Nav.Link>
              <Nav.Link as={Link} to="/doctors" className="nav-link" onClick={handleClose}>الأطباء</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link" onClick={handleClose}>الخدمات</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link" onClick={handleClose}>تواصل معنا</Nav.Link>

              </Navbar>
              </Navbar.Collapse>
        </Container>
      </Navbar>      
    </>
  );
};

export default Header;
