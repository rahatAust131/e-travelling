import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#logo">E-Transporter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="mini-navbar" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="text-center justify-content-end" bg='light'
        >
          <Nav className="align-items-center" activeKey="/home">
            <Nav.Item className="nav-links mr-2 pr-3 pl-3 ml-2">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links mr-2 pr-3 pl-3 ml-2">
              <Nav.Link href="destination">Destination</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links mr-2 pr-3 pl-3 ml-2">
              <Nav.Link href="blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-links mr-2 pr-3 pl-3 ml-2">
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav.Item>
            <Link to="/signup">
              <button type="button" className="btn btn-outline-info">
                Login
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
