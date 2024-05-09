import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/getData';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FaTrash, FaReply } from 'react-icons/fa';
import './ConsulterEstimation.css'
import { Repondre } from '../../components/estimation_liste/Repondre';
import { deleteData } from '../../utils/deleteData';
export const ConsulterEstimation = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [estimation, setEstimation] = useState(null);
    useEffect(() => {
        getData({ setData: setEstimation, url: "estimation/" + id });
    }, [id]);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const Delete = () => {
        alert('Est ce que vrairment tu veux supprimer cette demande ')
        deleteData({ url: `estimation/${id}` })
        alert('Succes')
        navigate('/estimationsPage')
    }
    return (
        <div className='ConsulterEstimation'>
            <div className='ConsulterEstimation_Container'>
                {estimation && (
                    <Col>
                        <Row>
                            <Col>
                                <h3>
                                    Nom :
                                </h3>
                                <h6>{estimation.name}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Prénom :
                                </h3>
                                <h6>
                                    {estimation.last_name}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Type de bien :
                                </h3>
                                <h6>{estimation.type}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Catégorie du bien :
                                </h3>
                                <h6>
                                    {estimation.categorie}
                                </h6>
                            </Col>
                            <Col>
                                <h3>
                                    Adresse :
                                </h3>
                                <h6>
                                    {estimation.adresse}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Email :
                                </h3>
                                <h6>{estimation.email}</h6>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Message :
                                </h3>
                                <p>
                                    {estimation.message}
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

                    </Col>
                )}
            </div>
            <Repondre showModal={showModal} handleClose={handleClose} data={estimation} />
        </div>
    )
}
