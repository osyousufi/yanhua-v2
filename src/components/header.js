import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap';

import logo from "../images/yanhualogolight.png"

const Header = () => (
  <header className="bg-ends">
    <Container>
      <Navbar expand="sm" variant="dark">
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <img
              src={logo}
              width="125"
              height="65"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
          <Nav as="ul">
            <Nav.Item as="li">
               <Link to="/about" className="nav-link" activeClassName="active">About</Link>
            </Nav.Item>
            <Nav.Item as="li">
               <Link to="/learn" className="nav-link" activeClassName="active">Learn</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
