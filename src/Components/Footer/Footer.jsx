import React from "react";
import { Link } from "react-router-dom";
import miLogo from '../../assets/img/logo512.png';
import clases from './Footer.css';

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {

  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col md="3">
            <img className={clases.cat} src={miLogo} alt="ArkhamGames"/> 
            <h1 className="title">Arkham Games</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Términos y condiciones
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  Politica de privacidad
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link}>
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  FAQ
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Síguenos:</h3>
            
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/arkhamgames"
                id="tooltip622135962"
                target="_blank"
              >
                <i class="bi bi-twitter" ></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/arkhamgames"
                id="tooltip230450801"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
          Copyright © 2022 Arkham Games - All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
