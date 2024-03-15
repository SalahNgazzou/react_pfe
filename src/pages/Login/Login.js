
import './login.css';
import {  useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login() {
    try {
      let item = { email, password };
      let result = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
  
      result = await result.json();
  
      if (result && result.user && result.user.role && result.user.statue) {
        if (result.user.statue === 'Inactive') {
            // Si le statut de l'utilisateur est "Inactive", affichez un message d'erreur ou effectuez une autre action appropriée
            console.log("Votre compte est inactif. Veuillez contacter l'administrateur.");
        } else if (result.user.role === 'Admin') {
            // Si l'utilisateur est un admin et son statut est "Active", redirigez-le vers la page '/Users'
            navigate('/Users');
        } else if(result.user.role === 'Courtier'){
            // Sinon, redirigez-le vers la page '/Courtier/biens'
            navigate('/Courtier/biens');
        }
    }
  
        localStorage.setItem("user-info", JSON.stringify(result));
     
     
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show an error message)
    }
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
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


