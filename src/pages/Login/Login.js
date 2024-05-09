import './login.css';
import { useState } from 'react';
import { Button, Col, Container, Form, Modal, ModalBody, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Log_in = ({ showModal, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login() {
    try {
      setLoading(true);
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
          console.log("Votre compte est inactif. Veuillez contacter l'administrateur.");
          // Gérer le cas où le compte de l'utilisateur est inactif (par exemple, afficher un message d'erreur)
        } else if (result.user.role === 'Admin') {
          navigate('/usersPage');
        } else if (result.user.role === 'Courtier') {
          navigate('/Courtier/biens');
        } else {
          navigate('/estimationsPage');
        }
      }

      localStorage.setItem("user-info", JSON.stringify(result));

      handleClose(); // Fermer la modal après la connexion réussie

    } catch (error) {
      console.error('Login failed:', error);
      // Gérer les erreurs de connexion (par exemple, afficher un message d'erreur à l'utilisateur)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body>
        <Form>
          <div style={{ maxWidth: '400px', overflowY: 'auto' }}>
            <div className='title_login'>
              <h3>Login</h3>
            </div>
            <div className='form_container'>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="exemple@gmail.com"
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
              <button onClick={login} disabled={loading}>
                {loading ? 'Chargement...' : 'Login'}
              </button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
