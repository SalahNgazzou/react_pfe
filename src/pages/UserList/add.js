// UserModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { postData } from '../../utils/postData';

const Popup = ({ showModal, handleClose }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Sécritaire", value: "Sécritaire" }, { key: "Utilisateur interne", value: "Utilisateur interne" }, { key: "Utilisateur externe", value: "Utilisateur externe" }]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roles[0].value)
  const [password, setPassword] = useState('')
  const [addresse, setAddress] = useState('')
  const [num_phone, setPhone] = useState('')

  async function Ajouter() {
    let item = { name, email, role, password, addresse, num_phone };
    console.log(item);
   postData({url:"ajouter",data:item})
    handleClose();
  }
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map(role => <option value={role.value}>{role.key}</option>)}
            </Form.Select>
          </Form.Group>

          {role === "Utilisateur externe" && (
            <>
              <h2>Abonnement</h2>
              <Form.Group controlId="agence">
                <Form.Label>Agence</Form.Label>
                <Form.Control
                  type="text"
                  name="agence"
                />
              </Form.Group>
              <Form.Group controlId="dataDebut">
                <Form.Label>Date Début</Form.Label>
                <Form.Control
                  type="date"
                  name="date_debut"

                />
              </Form.Group>

              <Form.Group controlId="dataFin">
                <Form.Label>Date Fin</Form.Label>
                <Form.Control
                  type="date"
                  name="date_fin"

                />
              </Form.Group>
            </>
          )}

          <Button variant="primary" onClick={Ajouter}>
            Enregistrer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

  );
};

export default Popup;
