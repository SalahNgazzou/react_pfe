import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/getData';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FaTrash, FaReply } from 'react-icons/fa';
import './ConsulterContact.css'
import { Repondre } from '../../components/estimation_liste/Repondre';
import { deleteData } from '../../utils/deleteData';
import { RepondreContact } from '../../components/Contact/repondreContact';
export const ConsulterContact = () => {
    const Navigate = useNavigate();

    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [contact, setContact] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    useEffect(() => {
        getData({ setData: setContact, url: "contact/" + id });
    }, [id]);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const Delete = () => {
        alert('Est ce que vrairment tu veux supprimer cette demande ')
        deleteData({ url: `contact/${id}` })
        setShowSuccessMessage(true);
        setTimeout(() => {
            Navigate('/contactsPage');
        }, 2000);

    }
    return (
        <div className='ConsulterContact'>
            <div className='ConsulterContact_Container'>
                {contact && (
                    <Col>
                        <Row>
                            <Col>
                                <h3>
                                    Nom :
                                </h3>
                                <h6>{contact.name}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Prénom :
                                </h3>
                                <h6>
                                    {contact.last_name}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <h3>
                                    Adresse :
                                </h3>
                                <h6>
                                    {contact.adresse}
                                </h6>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Téléphone :
                                </h3>
                                <h6>{contact.phone}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Email :
                                </h3>
                                <h6>
                                    {contact.email}
                                </h6>
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <h3>
                                    Message :
                                </h3>
                                <p>
                                    {contact.message}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className='btn_supprimer' onClick={Delete}>
                                    <FaTrash />   Supprimer
                                </button>
                            </Col>
                            <Col>
                                <button className='btn_repondre' onClick={handleShow}>
                                    <FaReply />  Répondre
                                </button>
                            </Col>
                        </Row>
                        {showSuccessMessage && (
                            <div className="alert alert-success" role="alert">
                                Le Contact a été supprimer avec succès !
                            </div>
                        )}
                    </Col>
                )}
            </div>
            <RepondreContact showModal={showModal} handleClose={handleClose} data={contact} />
        </div>
    )
}
