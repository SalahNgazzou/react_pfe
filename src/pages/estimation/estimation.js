import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './estimation.css'
import { PostEstimation } from '../../utils/VisiteurUtils/postEstimation';

export const Estimation = () => {
    const types = [

        { key: "Duplex", value: "Duplex" },
        { key: "Local Commercial", value: "Local Commercial" },
        { key: "Villa", value: "Villa" },
        { key: "Appartement", value: "Appartement" },
        { key: "Parking/Garage", value: "Parking/Garage" },
        { key: "Terrain", value: "Terrain" },
        { key: "Usine", value: "Usine" },
        { key: "Entrepot", value: "Entrepot" },
        { key: "Immeuble", value: "Immeuble" }
    ];
    const categories = [{ key: "A vendre", value: "A vendre" }, { key: "A louer", value: "A louer" }];
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [categorie, setCategorie] = useState('');
    const [adresse, setAdresse] = useState('');
    const [message, setMessage] = useState('');
    const etat = 'en attente';
    const ajouter = () => {
        if (!name || !last_name || !email || !type || !categorie || !adresse || !message) {
            alert('Veuillez remplir tous les champs.');
            return; // Arrêter l'exécution si un champ est vide
        }
        let item = { name, last_name, email, type, categorie, adresse, message,etat }
        PostEstimation({ url: "visiteur/estimation", items: item })
        setName('');
        setLastName('');
        setEmail('');
        setType('');
        setCategorie('');
        setAdresse('');
        setMessage('');
    }
    return (
        <div className='estimation'>
            <div className='estimation_form'>
                <div className='title'>
                    <h1>Estimez Votre Bien Immobilier</h1>
                    <h5>C'est Gratuit Et En Ligne En Plus !</h5>
                </div>
                <Col>
                    <Row>

                        <Col>

                            <Form.Label>Nom :</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
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
                                required
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Type : </Form.Label>
                            <Form.Select required
                                name='type'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option disabled value="">Villa</option>
                                {types.map(type => <option key={type.key} value={type.value}>{type.key}</option>)}
                            </Form.Select>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Categorie :</Form.Label>
                            <Form.Select name="categorie" required
                                value={categorie}
                                onChange={(e) => setCategorie(e.target.value)}
                            >
                                <option disabled value="">A vendre/ A louée </option>
                                {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.key}</option>)}
                            </Form.Select>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Adresse du bien :</Form.Label>
                            <Form.Control
                                type="text"
                                name="adresse"
                                required
                                placeholder='Ex:Rue Sidi Bousaid'
                                value={adresse}
                                onChange={(e) => setAdresse(e.target.value)}
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
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <button className='btn_envoyer' onClick={ajouter}>
                                Envoyer
                            </button>
                        </Col>

                    </Row>



                </Col>


            </div>
        </div>
    )
}
