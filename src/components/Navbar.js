import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarLayOut = () => {
  return (
    <div>
      <Navbar bg="info" variant="black">
        <Container>
          <div>
            <Navbar.Brand href="/">Jooble</Navbar.Brand>
          </div>
          <div>
            <Nav className="me-auto gap-5 fw-bold">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarLayOut;
