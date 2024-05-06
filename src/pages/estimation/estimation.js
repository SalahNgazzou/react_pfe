import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './estimation.css'

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
                                name="nom"
                                required
                            /*   value={prixMin}
                              onChange={(e) => setPrixMin(e.target.value)} */
                            />


                        </Col>


                        <Col>

                            <Form.Label>Prénom :</Form.Label>
                            <Form.Control
                                type="text"
                                name="prenom"
                                required
                            /*   value={prixMin}
                              onChange={(e) => setPrixMin(e.target.value)} */
                            />


                        </Col>

                    </Row>



                    <Row>
                        <Col>
                            <Form.Label>Email :</Form.Label>
                            <Form.Control
                                type="email"
                                name="prenom"
                                required
                            /* value={prixMin}
                            onChange={(e) => setPrixMin(e.target.value)} */
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Type : </Form.Label>
                            <Form.Select required /* value={type}
                onChange={(e) => setType(e.target.value)} */
                            >
                                <option disabled value="">Villa</option>
                                {types.map(type => <option key={type.key} value={type.value}>{type.key}</option>)}
                            </Form.Select>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Categorie :</Form.Label>
                            <Form.Select name="categorie" required /* value={categorie} onChange={(e) => setCategorie(e.target.value)} */
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
                                name="Adresse"
                                required
                                placeholder='Ex:Rue Sidi Bousaid'
                            /* value={prixMin}
                            onChange={(e) => setPrixMin(e.target.value)} */
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Message :</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="Message"
                                rows={4} // Adjust the number of rows as needed
                                placeholder="Enter message..."
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <button className='btn_envoyer'>
                                Envoyer
                            </button>
                        </Col>

                    </Row>



                </Col>


            </div>
        </div>
    )
}
