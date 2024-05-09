import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/getData';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FaTrash, FaReply } from 'react-icons/fa';
import './ConsulterRecherche.css'
import { Repondre } from '../../components/estimation_liste/Repondre';
import { deleteData } from '../../utils/deleteData';
import { getUser } from '../../utils/getUser';
export const ConsulterRecherche = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [recherche, setrecherche] = useState(null);
    const [user, setUser] = useState(getUser());
    useEffect(() => {
        getData({ setData: setrecherche, url: "recherche/" + id });
    }, [id]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const Delete = () => {
        alert('Est ce que vrairment tu veux supprimer cette demande ')
        deleteData({ url: `recherche/${id}` })
        alert('Succes')
        navigate('/recherchesPage')
    }
    return (
        <div className='Consulterrecherche'>
            <div className='Consulterrecherche_Container'>
                {recherche && (
                    <Col>
                        <Row>
                            <Col>
                                <h3>
                                    Nom :
                                </h3>
                                <h6>{recherche.name}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Prénom :
                                </h3>
                                <h6>
                                    {recherche.last_name}
                                </h6>
                            </Col>
                            <Col>
                                <h3>
                                    Téléphone :
                                </h3>
                                <h6>
                                    {recherche.phone}
                                </h6>
                            </Col>
                            <Col>
                                <h3>
                                    Email :
                                </h3>
                                <h6>{recherche.email}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Type de bien :
                                </h3>
                                <h6>{recherche.type}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Catégorie du bien :
                                </h3>
                                <h6>
                                    {recherche.categorie}
                                </h6>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Ville :
                                </h3>
                                <h6>{recherche.ville}</h6>
                            </Col>
                            <Col>
                                <h3>
                                    Gouvernorat :
                                </h3>
                                <h6>
                                    {recherche.gouvernant}
                                </h6>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Prix Minimum :
                                </h3>
                                <h6>
                                    {recherche.prix_min}
                                </h6>
                            </Col>
                            <Col>
                                <h3>
                                    Prix Maximum :
                                </h3>
                                <h6>
                                    {recherche.prix_max}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className='btn_supprimer' onClick={Delete}>
                                    <FaTrash />   Supprimer
                                </button>
                            </Col>
                            {(user.role === "Secrétaire") && (
                                <Col>
                                    <button className='btn_repondre' onClick={handleShow}>
                                        <FaReply />  Répondre
                                    </button>
                                </Col>
                            )}

                        </Row>

                    </Col>
                )}
            </div>
            <Repondre showModal={showModal} handleClose={handleClose} data={recherche} />
        </div>
    )
}
