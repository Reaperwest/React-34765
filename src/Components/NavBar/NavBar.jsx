import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import miLogo from '../../assets/img/logo512.png';
import './NavBar.css';

import { Link } from "react-router-dom";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";


class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
          <img  style={{
            width: "50px",
            height: "50px",
            objectFit: "contain"
        }} src={miLogo} alt="ArkhamGames"/>
          <NavbarBrand  tag={Link} to="/">
            Arkham Games
          </NavbarBrand>
          <Container>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink tag={Link} to="/" >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/pc" >
                    PC <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/playstation" >
                    Playstation <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/xbox" >
                    Xbox <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/nintendo-switch">
                    Nintendo Switch <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>

          <CartWidget cantItems={0}/>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;