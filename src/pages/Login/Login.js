import React, { useEffect } from 'react';
import './login.css';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification de la présence d'informations utilisateur dans le stockage local
    const userInfoString = localStorage.getItem('user-info');

    if (userInfoString) {
      // Conversion de la chaîne JSON en objet JavaScript
      const userInfo = JSON.parse(userInfoString);

      // Vérification du rôle de l'utilisateur
      if (userInfo && userInfo.role === 'Admin') {
        // Redirection vers la page d'ajout de produit en cas de connexion réussie
        navigate("/Sidebar");
      }
    }
  }, [navigate]);

  async function login() {


    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",                     // La méthode HTTP est POST
      body: JSON.stringify(item),        // Le corps de la requête contient les données de l'utilisateur au format JSON
      headers: {
        "Content-Type": 'application/json',   // Le corps de la requête est au format JSON
        "Accept": 'application/json'         // Attend de recevoir du JSON dans la réponse
      }
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));

  }
  return (

    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form style={{ borderRadius: '10px', border: '1px solid #ddd', padding: '20px' }}>
            <h3 className="mb-4">Login</h3>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={login}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


