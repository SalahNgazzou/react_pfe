// UserModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { postData } from '../../utils/postData';

const Popup = ({ showModal, handleClose }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Sécritaire", value: "Sécritaire" }, { key: "Courtier", value: " Courtier" }]
  const statues = [{ key: "Active", value: "Active" }, { key: "Inactive", value: "Inactive" }]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roles[0].value)
  const [statue, setStatue] = useState(statues[0].value)
  const [password, setPassword] = useState('')
  const [addresse, setAddress] = useState('')
  const [num_phone, setPhone] = useState('')
  const [last_name, setLastName] = useState('')
  const [cin, setCin] = useState('')
  const [birth, setBirth] = useState('')

  async function Ajouter() {
    let item = { name, last_name, cin, birth, email, role, password, addresse, num_phone,statue };
    console.log(item);
    postData({ url: "users", data: item })
    handleClose();
  }
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                onChange={(e) => setRole(e.target.value)}
              >
                {roles.map(role => <option value={role.value}>{role.key}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
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
            <Form.Group controlId="cin">
              <Form.Label>CIN</Form.Label>
              <Form.Control
                type="text"
                name="cin"
                onChange={(e) => setCin(e.target.value)}
              />
              <Form.Group controlId="birth">
                <Form.Label>birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="birth"
                  onChange={(e) => setBirth(e.target.value)}
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
                  name="num_phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
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
            <Form.Group controlId="statue">
              <Form.Label>Statue</Form.Label>
              <Form.Select
                name="statue"
                onChange={(e) => setStatue(e.target.value)}
              >
                {statues.map(statue => <option value={statue.value}>{statue.key}</option>)}
              </Form.Select>
            </Form.Group>
            <br />
            <Button variant="primary" onClick={Ajouter}>
              Save
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>

  );
};

export default Popup;
