// UserModal.js
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { postBien } from '../../utils/postData';

export const Popup = ({ showModal, handleClose }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Secrétaire", value: "Secrétaire" }, { key: "Courtier", value: "Courtier" }]; // Corrected typo in "Courtier"
  const statuses = [{ key: "Activer", value: "Activer" }, { key: "Déactiver", value: "Déactiver" }]; // Corrected variable name to "statuses"

  const [inputsData, setInputsData] = useState({
    name: '',
    last_name: '',
    email: '',
    role: '',
    cin: '',
    birth: '',
    num_phone: '',
    addresse: '',
    statue: '',
    image: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Select the first file from the list
    setInputsData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  async function Ajouter() {

    const formData = new FormData();
    if (!inputsData.name || !inputsData.last_name || !inputsData.cin || !inputsData.email || !inputsData.role || !inputsData.statue || !inputsData.addresse || !inputsData.birth || !inputsData.image) {
      alert("Tout les champs sont obligatoire");
      setShowSuccessMessage(false);
    }
    else {
      const { image, ...inputs } = inputsData;
      const data = {
        ...inputs
      };

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      formData.append('image', image);

      postBien({ url: "users", data: formData });

      setShowSuccessMessage(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  }
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter Utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                onChange={(e) => setInputsData({ ...inputsData, role: e.target.value })}
                required
              >
                {roles.map(role => <option key={role.value} value={role.value}>{role.key}</option>)} {/* Added key prop */}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => setInputsData({ ...inputsData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={(e) => setInputsData({ ...inputsData, last_name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setInputsData({ ...inputsData, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="cin">
              <Form.Label>CIN</Form.Label>
              <Form.Control
                type="text"
                name="cin"
                onChange={(e) => setInputsData({ ...inputsData, cin: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="birth">
              <Form.Label>Birthday</Form.Label> {/* Corrected typo in "Birthday" */}
              <Form.Control
                type="date"
                name="birth"
                onChange={(e) => setInputsData({ ...inputsData, birth: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                onChange={(e) => setInputsData({ ...inputsData, addresse: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="num_phone"
                onChange={(e) => setInputsData({ ...inputsData, num_phone: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="statue">
              <Form.Label>Status</Form.Label> {/* Corrected typo in "Status" */}
              <Form.Select
                name="statue"
                onChange={(e) => setInputsData({ ...inputsData, statue: e.target.value })}
                required
              >
                {statuses.map(statue => <option key={statue.value} value={statue.value}>{statue.key}</option>)} {/* Added key prop */}
              </Form.Select>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
                name="image"
              />
            </Form.Group>
            <br />
            {showSuccessMessage && (
              <div className="alert alert-success" role="alert">
                Utilisateur a été ajouté avec succès ! {/* Corrected French message */}
              </div>
            )}
            <Button style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none', }} onClick={Ajouter}>
              Ajouter
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>

  );
};
