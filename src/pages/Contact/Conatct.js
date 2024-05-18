import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './contact.css';
import { FaPaperPlane } from 'react-icons/fa';
import { PostEstimation } from '../../utils/VisiteurUtils/postEstimation';
import { Navbars } from '../../components/header/header';
export const Conatct = () => {
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [adresse, setAdresse] = useState('');
    const [message, setMessage] = useState('');
    const etat = 'en attente';
    const Envoyer = () => {
        let item = { name, last_name, phone, email, adresse, message, etat }
        PostEstimation({ url: 'visiteur/contact', items: item })
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAdresse('');
        setMessage('');
    }
    return (
        <div>
            <Navbars />

            <div className='Conatct'>
                <div className='contact_form'>
                    <Col>
                        <Row>
                            <Col>
                                <h3>
                                    Contactez Nous !
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Nom :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder='Nom'
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Prénom :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="last_name"
                                    placeholder='Prénom'
                                    required
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Adresse :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="adresse"
                                    placeholder='Adresse'
                                    required
                                    value={adresse}
                                    onChange={(e) => setAdresse(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Téléphone :</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phone"
                                    placeholder='Téléphone'
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Message :</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={4} // Adjust the number of rows as needed
                                    placeholder="Enter message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} onClick={Envoyer}>
                                    <FaPaperPlane /> Envoyer
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className='Text-contact'>
                    <p>
                        À la recherche d'une assistance professionnelle dans le domaine de l'immobilier ?
                        Ne cherchez pas plus loin ! RentHome est là pour répondre à tous vos besoins en matière d'habitation.
                        Que vous soyez à la recherche d'un nouvel appartement, d'une maison de location, ou que vous ayez des questions sur l'investissement immobilier,
                        notre équipe d'experts est prête à vous guider à chaque étape du processus.
                        Contactez-nous dès aujourd'hui en un simple clic et découvrez comment RentHome peut vous aider à trouver la maison de vos rêves.
                    </p>

                </div>

            </div>
        </div>
    )
}
