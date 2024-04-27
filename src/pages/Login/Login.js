
import './login.css';
import { useState } from 'react';
import { Button, Col, Container, Form, Modal, ModalBody, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Log_in = ({ showModal, handleClose }) => {

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
        } else if (result.user.role === 'Courtier') {
          // Sinon, redirigez-le vers la page '/Courtier/biens'
          navigate('/Courtier/biens');
        } else {
          navigate('/Secraitaire')
        }
      }

      localStorage.setItem("user-info", JSON.stringify(result));


    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., show an error message)
    }
    handleClose();
  }
  return (
    <Modal show={showModal} onHide={handleClose} >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body >


        <Form >
          <div style={{ maxWidth: '400px', overflowY: 'auto' }}>
            <div className='title_login'>
              <h3>Login</h3>
            </div>
            <div className='form_container'>
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
            </div>
            <div className='btn-login'>
              <button  onClick={login}>
                Login
              </button>
            </div>

          </div>

        </Form>


      </Modal.Body>
    </Modal>


  );

}


