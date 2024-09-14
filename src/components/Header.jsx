import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import  '../index.css'


const Header = () => {
  return (
    <>
      <Navbar bg="white" data-bs-theme="light" className="pt-4  d-none d-lg-flex">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto flex-grow-1 justify-content-center fs-4 fw-bolder pb-4">
            <Nav.Link href="#home" className="nav-link">الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="#features" className="nav-link">الأطباء</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">الخدمات</Nav.Link>

            <Nav.Link href="#pricing" className="nav-link">تواصل معنا</Nav.Link>


          </Nav>
          </Navbar.Collapse >
          <Button  className="p-3 fs-4" variant="primary" as="input" type="button" value="احجز موعد عبر الأنترنت" />{' '}

        </Container>
      </Navbar>



      {/* Navbar for Mobile */}
      <Navbar bg="white" className="d-lg-none" expand="lg">
        <Container>
          <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="mobile-navbar-nav"  className="custom-toggle " />
          <Navbar.Collapse id="mobile-navbar-nav h-50">
            <Navbar className="me-auto  d-flex flex-column justify-content-between p-5 gap-4 align-items-end">
              <Nav.Link href="#home">الصفحة الرئيسية</Nav.Link>
              <Nav.Link href="#features">الأطباء</Nav.Link>
              <Nav.Link href="#services">الخدمات</Nav.Link>
              <Nav.Link href="#services">تواصل معنا</Nav.Link>

              </Navbar>
              </Navbar.Collapse>
        </Container>
      </Navbar>      
    </>
  );
};

export default Header;
