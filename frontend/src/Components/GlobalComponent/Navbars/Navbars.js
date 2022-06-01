import React, { Component } from "react";
import { Link } from "react-router-dom"; // instead of using anchor tag we use react link for navigation
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";

export default class Navbars extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="fixed-top nav-container"
        >
          <Navbar.Brand className="margin-padding">
            <Nav.Link as={Link} to={"/#"}>
              <span className="font-bold nav-heading">MineCalc</span>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav d-flex justify-content-center>
                <Nav.Link
                  as={Link}
                  to={"/#"}
                  className={`${path === "/" && "active"}`}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/about"}
                  className={`${path === "/about" && "active"}`}
                >
                  AboutUs
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/contact"}
                  className={`${path === "/contact" && "active"}`}
                >
                  Contact Us
                </Nav.Link>
              </Nav>

              <Nav className="ml-auto"></Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
