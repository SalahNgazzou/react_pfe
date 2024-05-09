import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { postData } from '../../utils/postData';
import { putData } from '../../utils/putData';
import { FaPaperPlane } from 'react-icons/fa';
export const RepondreContact = ({ showModal, handleClose, data }) => {

    const Navigate = useNavigate();

    const id = data?.id;
    const email = data?.email;
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const SendMail = () => {
        let item = { email, object, message }

        postData({ url: 'send-email', data: item })
        putData({ url: 'contact', id: id })
        if (!object || !message) {
            alert('Veuillez remplir tous les champs.')
        } else {
            setShowSuccessMessage(true);
            setTimeout(() => {
                Navigate('/contactPage');
            }, 2000);

        }

    }
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Envoyer Mail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>To :</Form.Label>
                        <Form.Control type="text" value={email} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Object :</Form.Label>
                        <Form.Control type="text" placeholder="Sujet de Mail" required onChange={(e) => setObject(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message :</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Votre Message" required onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                </Form>
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert">
                        Email a été envoyer avec succès !
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={SendMail} style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }}>
                    <FaPaperPlane />  Envoyer
                </Button>

            </Modal.Footer>
        </Modal>
    )
}
