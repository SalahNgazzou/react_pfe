import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs'; // Importez l'icône de connexion
import "./header.css"
import { Log_in } from '../../pages/Login/Login';
import { useState } from 'react';

export const Navbars = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  const navLinkStyle = {
    color: '#4A536B',
    fontSize: '1.2rem', // Augmentation de la taille de la police
    marginRight: '20px'
  };

 

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/home"><img src='/img/logo5.png' width="250"
          height="50"
          className="d-inline-block align-top"
          alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: '100px', color: '#fff', display:"flex",justifyContent:"space-between" ,alignItems:'center'}}
            navbarScroll
          >
            <Nav.Link href="/home" style={{ ...navLinkStyle}}>Home</Nav.Link>
            <Nav.Link href="/estimation" style={{ ...navLinkStyle}}>Estimation</Nav.Link>

            <Nav.Link href="/about" style={{ ...navLinkStyle}}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={{ ...navLinkStyle}}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="primary" style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} onClick={handleShow}>
              <BsFillPersonFill /> {/* Icône de connexion */}
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Log_in showModal={showModal} handleClose={handleClose} />
    </Navbar>
  );
}

