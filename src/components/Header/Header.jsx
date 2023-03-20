import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Badge from "react-bootstrap/Badge";
import CartComponent from "../../container/Cart/CartComponent";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand>My Restaurant</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Link className="nav-link" to="/cart">
              Cart
              {/* {carts && carts.length && carts.length > 0 ? (
                    <Badge bg="info">{carts.length}</Badge>
                  ) : (
                    ""
                  )} */}
            </Link>
            {/* <CartComponent /> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
