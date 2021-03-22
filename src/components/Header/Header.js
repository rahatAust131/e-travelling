import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
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
            <Nav.Item className="nav-links m-2 pr-2 pl-2">
              <Link to="/home">Home</Link>
            </Nav.Item>
            <Nav.Item className="nav-links m-2 pr-2 pl-2">
              <Link to="/destination">Destination</Link>
            </Nav.Item>
            <Nav.Item className="nav-links m-2 pr-2 pl-2">
              <Link to="/blog">Blog</Link>
            </Nav.Item>
            <Nav.Item className="nav-links m-2 pr-2 pl-2">
              <Link to="/contact">Contact</Link>
            </Nav.Item>
            <Nav.Item>
            {loggedInUser.email 
              ? loggedInUser.name 
              : <Link to="/login" type="button" className="btn btn-outline-info m-2 pr-2 pl-2">Login</Link>
            }
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
