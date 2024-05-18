import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../utils/getData';
import { backApi } from '../../constant/backApi'
import './ConsulterCommentaire.css';
import { FaReply, FaTrash } from 'react-icons/fa';
import { RepondreCommentaire } from '../../components/CommentairsListe/RepondreCommentaire';
import { deleteData } from '../../utils/deleteData';

export const ConsulterCommentair = () => {
    const Navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [comment, setComment] = useState({});
    const [bien, setBien] = useState({});
    const [images, setImages] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [email, setEmail] = useState(comment.email)
    useEffect(() => {
        // Récupérer le commentaire et le bien associé avec les images
        getData({ setData: setComment, url: `commentaire/bien/${id}` });
    }, [id]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const Delete = () => {
        alert('Est ce que vrairment tu veux supprimer cette demande ')
        deleteData({ url: `commentaire/${id}` })
        setShowSuccessMessage(true);
        setTimeout(() => {
            Navigate('/commentaire');
        }, 2000);

    }

    return (
        <div className='ConsulterCommentair'>
            <div className='consuterCommentaireForm'>
                <Col>
                    <div className='comment_images'>
                        <Row>
                            <Col>

                                <Carousel>
                                    {comment.images && comment.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={backApi + image.src}
                                                alt={`Image ${index + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                            </Col>
                        </Row>
                    </div>
                    <div className='comment_info'>
                        <Col>
                            <div className='partie'>
                                <Row>
                                    {/* Afficher les détails du bien */}
                                    <Col>
                                        <h2>Type : {comment.type_biens}</h2>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>
                                    <Col>
                                        <h2>Catégorie : {comment.categorie}</h2>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>
                                    <Col>
                                        <h2>Prix(DT) : {comment.prix}</h2>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>
                                </Row>
                            </div>

                            <div className='partie'>

                                <Row>
                                    {/* Afficher les détails du bien */}

                                    <Col>
                                        <h2>Adresse : {comment.addresse}</h2>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>


                                    <Col>
                                        <h2>Ville : {comment.ville} </h2> <span></span>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>


                                    <Col>
                                        <h2>governorat : {comment.gouvernant}</h2>

                                        {/* Afficher d'autres détails du bien si nécessaire */}
                                    </Col>

                                </Row>

                            </div>

                            <div className='commentaire'>
                                <Row>
                                    {/* Afficher le commentaire */}
                                    <Col>
                                        <h3>Commentaire : </h3>
                                        <p>{comment.message}</p>
                                    </Col>
                                </Row>
                            </div>
                            {showSuccessMessage && (
                    <div className="alert alert-success" role="alert">
                       Commentaire a été supprimer  avec succès !
                    </div>
                )}
                            <Row>
                                {/* Afficher le commentaire */}
                                <Col>
                                    <button className='btn_supprimer' onClick={Delete}>
                                        <FaTrash />  Supprimer
                                    </button>

                                </Col>
                                <Col>
                                    <button className='btn_repondre' onClick={handleShow}>
                                        <FaReply /> Répondre
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </div>

                </Col>
            </div>
            <RepondreCommentaire showModal={showModal} handleClose={handleClose} data={comment} />
        </div>
    );
};
