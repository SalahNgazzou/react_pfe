// UserModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { putData } from '../../utils/putData';

const EditPopup = ({ handleCloseEdit, userdata }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Sécritaire", value: "Sécritaire" }, { key: "Courtier", value: "Courtier" }]
  const [name, setName] = useState(userdata?.name);
  const [cin, setCin] = useState(userdata?.cin);
  const [birth, setBirth] = useState(userdata?.birth);
  const [last_name, setLastName] = useState(userdata?.last_name);
  const [email, setEmail] = useState(userdata?.email)
  const [role, setRole] = useState(userdata?.role)
  const [addresse, setAddress] = useState(userdata?.addresse)
  const [num_phone, setPhone] = useState(userdata?.num_phone)
  const [password, setPassword] = useState(null);



  async function Modifier() {

    let item = { name, last_name, cin, birth, email, role, addresse, num_phone ,password};
    console.log(item);

    putData({ url: "users/update", data: item, id: userdata.id })
    handleCloseEdit();
  }

  return (

    <Modal show={!userdata ? false : true} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier Utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                {roles.map(role => <option value={role.value}>{role.key}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Mot de passe :</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder='Entre une nouvelle mot de passe '
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </Form.Group>
            <Form.Group controlId="cin">
              <Form.Label>CIN</Form.Label>
              <Form.Control
                type="text"
                name="cin"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
                required
              />
              <Form.Group controlId="birth">
                <Form.Label>birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="birth"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={addresse}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="num_phone"
                  value={num_phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Group>

            <br />
            <Button variant="primary" onClick={Modifier}>
              Save
            </Button>

          </Form>
        </div>
      </Modal.Body>
    </Modal>

  );

}
export default EditPopup;
