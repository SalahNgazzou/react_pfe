// UserModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { putData } from '../../utils/putData';

const EditPopup = ({ handleCloseEdit, userdata }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Sécritaire", value: "Sécritaire" }, { key: "Utilisateur interne", value: "Utilisateur interne" }, { key: "Utilisateur externe", value: "Utilisateur externe" }]
  const [name, setName] = useState(userdata?.name);
  const [email, setEmail] = useState(userdata?.email)
  const [role, setRole] = useState(userdata?.role)
  const [addresse, setAddress] = useState(userdata?.addresse)
  const [num_phone, setPhone] = useState(userdata?.num_phone)

  console.log(userdata);


  async function Modifier() {

    let item = { name, email, role, addresse, num_phone };
    console.log(item);

    putData({ url: "update", data: item,id:userdata.id})
    handleCloseEdit();
  }

  return (

    <Modal show={!userdata ? false : true} onHide={handleCloseEdit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={addresse}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={num_phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={role}
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
                  name="dataDebut"

                />
              </Form.Group>

              <Form.Group controlId="dataFin">
                <Form.Label>Date Fin</Form.Label>
                <Form.Control
                  type="date"
                  name="dataFin"

                />
              </Form.Group>
            </>
          )}

          <Button variant="primary" onClick={Modifier}>
            Modifier
          </Button>

        </Form>

      </Modal.Body>
    </Modal>

  );

}
export default EditPopup;
