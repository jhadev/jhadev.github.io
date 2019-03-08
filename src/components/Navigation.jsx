import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Animated } from "react-animated-css";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="sticky-top shadow">
        <Navbar color="dark" dark fixed="fixed" expand="md">
          <Animated animationIn="slideInDown">
            <NavbarBrand href="#">
              {"[ "}
              {"\u00A0"}josh appel{"\u00A0"}
              {" ]"}
            </NavbarBrand>
          </Animated>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto animated zoomIn" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} href="#about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="#portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="#contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="#resume">
                  Resume
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
