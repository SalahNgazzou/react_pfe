// UserModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { putBien, putData } from '../../utils/putData';

const EditPopup = ({ handleCloseEdit, userdata }) => {
  const roles = [{ key: "Admin", value: "Admin" }, { key: "Sécritaire", value: "Sécritaire" }, { key: "Courtier", value: "Courtier" }]
 
  const [inputsData, setInputsData] = useState({
    name: userdata.name,
    last_name: userdata.last_name, 
    email: userdata.email,
    role: userdata.role,
    cin: userdata.cin,
    birth: userdata.birth, 
    num_phone: userdata.num_phone, 
    addresse: userdata.addresse, 
    image: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Select the first file from the list
    setInputsData((prev) => ({
      ...prev,
      image: file,
    }));
  };


  async function Modifier() {

    const formData = new FormData();
    const { image, ...inputs } = inputsData;
    const data = {
      ...inputs
    };

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append('image', image);
console.log(formData);
    

    putBien({ url: "users/update", data: formData, id: userdata.id })
    handleCloseEdit();
  }

  return (

    <Modal show={!userdata ? false : true} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                
                onChange={(e) => setInputsData({ ...inputsData, role: e.target.value })}                required
              >
                {roles.map(role => <option value={role.value}>{role.key}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
               value={inputsData.name}
                onChange={(e) => setInputsData({ ...inputsData, name: e.target.value })}                required
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={inputsData.last_name}
                onChange={(e) => setInputsData({ ...inputsData, last_name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputsData.email}
                onChange={(e) => setInputsData({ ...inputsData, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="cin">
              <Form.Label>CIN</Form.Label>
              <Form.Control
                type="text"
                name="cin"
                value={inputsData.cin}
                onChange={(e) => setInputsData({ ...inputsData, cin: e.target.value })}
                required
              />
              <Form.Group controlId="birth">
                <Form.Label>birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="birth"
                  value={inputsData.birth}
                  onChange={(e) => setInputsData({ ...inputsData, birth: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={inputsData.addresse}
                  onChange={(e) => setInputsData({ ...inputsData, addresse: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="num_phone"
                  value={inputsData.num_phone}
                  onChange={(e) => setInputsData({ ...inputsData, num_phone: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  name='image'
                />
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
