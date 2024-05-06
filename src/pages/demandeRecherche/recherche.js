import React from 'react'
import './recherche.css';
import { Col, Form, Row } from 'react-bootstrap';

export const Recherche = () => {
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
    const gouvernorats = [
        { key: "", value: "" },
        { key: 'Ariana', value: 'Ariana' },
        { key: 'Béja', value: 'Béja' },
        { key: 'Ben Arous', value: 'Ben Arous' },
        { key: 'Bizerte', value: 'Bizerte' },
        { key: 'Gabès', value: 'Gabès' },
        { key: 'Gafsa', value: 'Gafsa' },
        { key: 'Jendouba', value: 'Jendouba' },
        { key: 'Kairouan', value: 'Kairouan' },
        { key: 'Kasserine', value: 'Kasserine' },
        { key: 'Kébili', value: 'Kébili' },
        { key: 'Kef', value: 'Kef' },
        { key: 'Mahdia', value: 'Mahdia' },
        { key: 'Manouba', value: 'Manouba' },
        { key: 'Médenine', value: 'Médenine' },
        { key: 'Monastir', value: 'Monastir' },
        { key: 'Nabeul', value: 'Nabeul' },
        { key: 'Sfax', value: 'Sfax' },
        { key: 'Sidi Bouzid', value: 'Sidi Bouzid' },
        { key: 'Siliana', value: 'Siliana' },
        { key: 'Sousse', value: 'Sousse' },
        { key: 'Tataouine', value: 'Tataouine' },
        { key: 'Tozeur', value: 'Tozeur' },
        { key: 'Tunis', value: 'Tunis' },
        { key: 'Zaghouan', value: 'Zaghouan' }
    ];
    return (
        <div className='recherche'>
            <div className='form_recherche'>
                <div className='recherch_title'>
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
                            <Form.Label>Télephone :</Form.Label>
                            <Form.Control
                                type="number"
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
                            <Form.Select required
                            >
                                <option disabled value="">Villa</option>
                                {types.map(type => <option key={type.key} value={type.value}>{type.key}</option>)}
                            </Form.Select>
                        </Col>
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
                            <Form.Label>Gouvernorat</Form.Label>
                            <Form.Select name="gouvernant" required

                            // onChange={(e) => setInputsData({ ...inputsData, gouvernant: e.target.value })}

                            >
                                {gouvernorats.map(gouv => <option key={gouv.key} value={gouv.value}>{gouv.key}</option>)}
                            </Form.Select>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Ville :</Form.Label>
                            <Form.Control
                                type="text"
                                name="ville"
                                required
                            /* value={prixMin}
                            onChange={(e) => setPrixMin(e.target.value)} */
                            />
                        </Col>

                    </Row>
                    <Row>

                        <Col>

                            <Form.Label>Prix Minimum :</Form.Label>
                            <Form.Control
                                type="number"
                                name="prix_min"
                            /*   value={prixMin}
                              onChange={(e) => setPrixMin(e.target.value)} */
                            />


                        </Col>


                        <Col>

                            <Form.Label>Prix Maximum :</Form.Label>
                            <Form.Control
                                type="number"
                                name="prix_max"
                            /*   value={prixMin}
                              onChange={(e) => setPrixMin(e.target.value)} */
                            />


                        </Col>

                    </Row>
                    <button className='btn_envoyer'>
                        Envoyer
                    </button>


                </Col>


            </div>
        </div>
    )
}
