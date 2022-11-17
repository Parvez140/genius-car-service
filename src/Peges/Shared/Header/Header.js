import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-black.png';
import './Header.css';

const Header = () => {

  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} height="30px" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-menu' href="home#services">Services</Nav.Link>
            <Nav.Link className='nav-menu' href="home#experts">Experts</Nav.Link>
            {
              user &&
              <>
              <Nav.Link className='nav-menu' as={Link} to="/addService">Add Service</Nav.Link>
              <Nav.Link className='nav-menu' as={Link} to="/manageService">Manage Service</Nav.Link>
              </>
            } 
             <Nav.Link className='nav-menu' as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            {
              user ?
              <button onClick={handleSingOut} className="btn btn-danger" >sing out</button>
              :
            <Nav.Link className='nav-menu' as={Link} to="/login">
              Login
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    );
};

export default Header;