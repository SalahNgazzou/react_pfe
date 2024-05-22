import React, { useState } from 'react'
import './recherche.css';
import { Col, Form, Row } from 'react-bootstrap';
import { PostEstimation } from '../../utils/VisiteurUtils/postEstimation';
import { Navbars } from '../../components/header/header';

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
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [categorie, setCategorie] = useState('');
    const [gouvernant, setGouvernant] = useState('');
    const [ville, setVille] = useState('');
    const [prix_min, setPrixMin] = useState('');
    const [prix_max, setPrixMax] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const etat = 'en attente';

    const Envoyer = () => {
        if (!name || !last_name || !phone || !email || !type || !categorie || !gouvernant || !ville || !prix_min || !prix_max) {
            alert('Tous les champs sont obligatoire !')
        }
        else{
            let item = { name, last_name, phone, email, type, categorie, gouvernant, ville, prix_min, prix_max, etat }
            PostEstimation({ url: "visiteur/recherche", items: item })
            setName('');
            setLastName('');
            setPhone('');
            setEmail('');
            setType('');
            setCategorie('');
            setGouvernant('');
            setVille('');
            setPrixMin('');
            setPrixMax('');

            setTimeout(() => {
                setShowSuccessMessage(true);
            }, 2000);
        }

    }
    return (
        <div>
            <Navbars />

            <div className='recherche'>
                <div className='form_recherche'>
                    <div className='recherch_title'>
                        <h1>Cherchez Votre Bien Immobilier Ici</h1>
                        <h6>Faire Une Demande De Recherche Gratuit Et En Ligne En Plus !</h6>
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
                                <Form.Label>Télephone :</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phone"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Type : </Form.Label>
                                <Form.Select required
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option disabled value="">Villa</option>
                                    {types.map(type => <option key={type.key} value={type.value}>{type.key}</option>)}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Categorie :</Form.Label>
                                <Form.Select name="categorie" required value={categorie} onChange={(e) => setCategorie(e.target.value)}
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
                                    value={gouvernant} onChange={(e) => setGouvernant(e.target.value)}


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
                                    value={ville}
                                    onChange={(e) => setVille(e.target.value)}
                                />
                            </Col>

                        </Row>
                        <Row>

                            <Col>

                                <Form.Label>Prix Minimum :</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="prix_min"
                                    value={prix_min}
                                    onChange={(e) => setPrixMin(e.target.value)}
                                />


                            </Col>


                            <Col>

                                <Form.Label>Prix Maximum :</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="prix_max"
                                    value={prix_max}
                                    onChange={(e) => setPrixMax(e.target.value)}
                                />


                            </Col>

                        </Row>
                        {showSuccessMessage && (
                            <div className="alert alert-success" role="alert">
                                Votre demande à été envoyer avec succès !
                            </div>
                        )}
                        <button className='btn_envoyer ' onClick={Envoyer}>
                            Envoyer
                        </button>


                    </Col>


                </div>
            </div>
        </div>
    )
}
