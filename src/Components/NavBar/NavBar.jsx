import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import miLogo from '../../assets/img/logo512.png';
import clases from './NavBar.css';

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
          <img className={clases.cat} src={miLogo} alt="ArkhamGames"/>
          <NavbarBrand href="/">
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
                  <NavLink href="/" >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="/category/pc" >
                    PC <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="/category/playstation" >
                    Playstation <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="/category/xbox" >
                    Xbox <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink href="/category/nintendo-switch">
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