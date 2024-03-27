//import { useState } from "react";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Pagination, Row } from "react-bootstrap";
import './add.css';
export const Biens = ({ showModal, handleClose }) => {
    const types = [{ key: "Villa", value: "Villa" }, { key: "Appartement", value: "Appartement" }, { key: "Duplex", value: " Duplex" }, { key: "Local Commercial", value: " Local Commercial" }, { key: "Parking/Garage", value: "Parking/Garage" }, { key: "Terrain", value: " Terrain" }, { key: "Usine", value: " Usine" }, { key: "Entrepot", value: " Entrepot" }, { key: "Immeuble", value: " Immeuble" }]
    const dispo = [{ key: "En cours", value: "En cours" }, { key: "Vendu", value: "Vendu" }, { key: "Louée", value: "Louée" }]
    const meublé = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const jardin = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const piscin = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const garage = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const chauffage = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const climatisation = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const balcon = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const etages = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const ascenceur = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const parking = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const vues = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const terasses = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]
    const categories = [{ key: "A vendre", value: "A vendre" }, { key: "A louer", value: "A louer" }]
    const gouvernorats = [
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

    const [showPartTwo, setShowPartTwo] = useState(false);
    const [user, setUser] = useState(null);
    const handleNext = () => {
        setShowPartTwo(true);
    };

    useEffect(() => {
        // Récupérer les données de l'utilisateur depuis le localStorage
        const userData = localStorage.getItem('user-info');
        const parsedUser = userData ? JSON.parse(userData).user ?? "" : null;

        setUser(parsedUser);
    }, []);

    const handleBack = () => {
        setShowPartTwo(false);
    };

    const [ouiChecked, setOuiChecked] = useState(false);
    const [nonChecked, setNonChecked] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const handleOuiChange = (event) => {
        setOuiChecked(event.target.checked);
        if (event.target.checked) {
            setNonChecked(false); // Décocher "Non" si "Oui" est coché
        }
    };

    const handleNonChange = (event) => {
        setNonChecked(event.target.checked);
        if (event.target.checked) {
            setOuiChecked(false); // Décocher "Oui" si "Non" est coché
        }
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        console.log(selectedType)
    };

    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Biens</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {showPartTwo ? (
                        <div >
                            {/* Content for Part 2 */}
                            <h4>Photos </h4>

                            <Button variant="secondary" onClick={handleBack}>
                                Back
                            </Button>

                        </div>
                    ) : (

                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                            <h4>Bien</h4>

                            <Form.Group controlId="type_biens" className="custom-padding">
                                <Form.Label>Type</Form.Label>
                                <Form.Select name="type_biens" onChange={handleTypeChange}>
                                    {types.map(type => <option value={type.value}>{type.key}</option>)}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="categorie" className="custom-padding">
                                <Form.Label>Categorie</Form.Label>
                                <Form.Select name="categorie">
                                    {categories.map(categorie => <option value={categorie.value}>{categorie.key}</option>)}
                                </Form.Select>
                            </Form.Group>
                            {user && (
                                <div>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="user_name" className="custom-padding">
                                                <Form.Label>user name</Form.Label>
                                                <Form.Control type="text" name="user_name" value={user.name} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="user_lastName" className="custom-padding">
                                                <Form.Label>user lastname</Form.Label>
                                                <Form.Control type="text" name="user_lastName" value={user.last_name} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="user_email" className="custom-padding">
                                                <Form.Label>user email</Form.Label>
                                                <Form.Control type="text" name="user_email" value={user.email} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="user_phone" className="custom-padding">
                                                <Form.Label>user phone</Form.Label>
                                                <Form.Control type="text" name="user_phone" value={user.num_phone} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                            <Row>
                                <Col>
                                    <Form.Group controlId="propritair_name" className="custom-padding">
                                        <Form.Label>propritair name</Form.Label>
                                        <Form.Control type="text" name="propritair_name" />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="proritaire_phone" className="custom-padding">
                                        <Form.Label>proritaire phone</Form.Label>
                                        <Form.Control type="text" name="proritaire_phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="disponibilté" className="custom-padding">
                                <Form.Label>Disponibilité</Form.Label>
                                <Form.Select name="disponibilté">
                                    {dispo.map(disp => <option value={disp.value}>{disp.key}</option>)}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="description" className="custom-padding">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    rows={4} // Adjust the number of rows as needed
                                    placeholder="Enter description"
                                />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group controlId="name" className="custom-padding">
                                        <Form.Label>Adresse</Form.Label>
                                        <Form.Control type="text" name="addresse" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="gouvernorats" className="custom-padding">
                                        <Form.Label>Gouvernorat</Form.Label>
                                        <Form.Select name="gouvernorats">
                                            {gouvernorats.map(gouv => <option key={gouv.key} value={gouv.value}>{gouv.key}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="ville" className="custom-padding">
                                        <Form.Label>Ville</Form.Label>
                                        <Form.Control type="text" name="ville" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="prix" className="custom-padding">
                                <Form.Label>Prix (DT):</Form.Label>
                                <div className="input-group">
                                    <Form.Control
                                        type="number"
                                        id="prix"
                                        placeholder="Entrer le prix en DT"
                                        aria-describedby="dt-addon"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="dt-addon">DT</span>
                                    </div>
                                </div>
                            </Form.Group>
                            {selectedType === 'Villa' && (
                                <div>
                                    <Form.Group controlId="surface" className="custom-padding">
                                        <Form.Label>Surface (m²):</Form.Label>
                                        <div className="input-group">
                                            <Form.Control
                                                type="number"
                                                id="surface"
                                                placeholder="Entrer la surface en m²"
                                                aria-describedby="m2-addon"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="m2-addon">m²</span>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="nombreChambres" className="custom-padding">
                                                <Form.Label>Nombre de chambres :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de chambres"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="nombreSallesDeBain" className="custom-padding">
                                                <Form.Label>Nombre de salles de bain :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de salles de bain"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="proximité" className="custom-padding">
                                        <Form.Label>proximité</Form.Label>
                                        <Form.Control type="text" name="proximité" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="meublé" className="custom-padding">
                                                <Form.Label>meublé</Form.Label>
                                                <Form.Select name="meublé">
                                                    {meublé.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="jardin" className="custom-padding">
                                                <Form.Label>jardin</Form.Label>
                                                <Form.Select name="jardin">
                                                    {jardin.map(jard => <option key={jard.key} value={jard.value}>{jard.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="climatisation" className="custom-padding">
                                                <Form.Label>piscin</Form.Label>
                                                <Form.Select name="climatisation">
                                                    {piscin.map(pis => <option key={pis.key} value={pis.value}>{pis.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="garage" className="custom-padding">
                                                <Form.Label>garage</Form.Label>
                                                <Form.Select name="garage">
                                                    {garage.map(gara => <option key={gara.key} value={gara.value}>{gara.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="chauffage" className="custom-padding">
                                                <Form.Label>chauffage</Form.Label>
                                                <Form.Select name="chauffage">
                                                    {chauffage.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="climatisation" className="custom-padding">
                                                <Form.Label>climatisation</Form.Label>
                                                <Form.Select name="climatisation">
                                                    {climatisation.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </div>


                            )}


                            {selectedType === 'Usine' && (
                                <div>
                                    <Form.Group controlId="surface" className="custom-padding">
                                        <Form.Label>Surface (m²):</Form.Label>
                                        <div className="input-group">
                                            <Form.Control
                                                type="number"
                                                id="surface"
                                                placeholder="Entrer la surface en m²"
                                                aria-describedby="m2-addon"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="m2-addon">m²</span>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="nombreChambres" className="custom-padding">
                                                <Form.Label>Nombre de chambres :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de chambres"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="nombreSallesDeBain" className="custom-padding">
                                                <Form.Label>Nombre de salles de bain :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de salles de bain"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="proximité" className="custom-padding">
                                        <Form.Label>proximité</Form.Label>
                                        <Form.Control type="text" name="proximité" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="balcon" className="custom-padding">
                                                <Form.Label>balcon</Form.Label>
                                                <Form.Select name="balcon">
                                                    {balcon.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="ascenceur" className="custom-padding">
                                                <Form.Label>ascenceur</Form.Label>
                                                <Form.Select name="ascenceur">
                                                    {ascenceur.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="etages" className="custom-padding">
                                                <Form.Label>etages</Form.Label>
                                                <Form.Select name="etages">
                                                    {etages.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="meublé" className="custom-padding">
                                                <Form.Label>meublé</Form.Label>
                                                <Form.Select name="meublé">
                                                    {meublé.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="Parking" className="custom-padding">
                                                <Form.Label>Parking</Form.Label>
                                                <Form.Select name="parking">
                                                    {parking.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="chauffage" className="custom-padding">
                                                <Form.Label>chauffage</Form.Label>
                                                <Form.Select name="chauffage">
                                                    {chauffage.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="climatisation" className="custom-padding">
                                                <Form.Label>climatisation</Form.Label>
                                                <Form.Select name="climatisation">
                                                    {climatisation.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                            
                            {selectedType === 'Duplex' && (
                                <div>
                                    <Form.Group controlId="surface" className="custom-padding">
                                        <Form.Label>Surface (m²):</Form.Label>
                                        <div className="input-group">
                                            <Form.Control
                                                type="number"
                                                id="surface"
                                                placeholder="Entrer la surface en m²"
                                                aria-describedby="m2-addon"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="m2-addon">m²</span>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="nombreChambres" className="custom-padding">
                                                <Form.Label>Nombre de chambres :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de chambres"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="nombreSallesDeBain" className="custom-padding">
                                                <Form.Label>Nombre de salles de bain :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Entrer le nombre de salles de bain"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="proximité" className="custom-padding">
                                        <Form.Label>proximité</Form.Label>
                                        <Form.Control type="text" name="proximité" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="balcon" className="custom-padding">
                                                <Form.Label>balcon</Form.Label>
                                                <Form.Select name="balcon">
                                                    {balcon.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="ascenceur" className="custom-padding">
                                                <Form.Label>ascenceur</Form.Label>
                                                <Form.Select name="ascenceur">
                                                    {ascenceur.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="etages" className="custom-padding">
                                                <Form.Label>etages</Form.Label>
                                                <Form.Select name="etages">
                                                    {etages.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="meublé" className="custom-padding">
                                                <Form.Label>meublé</Form.Label>
                                                <Form.Select name="meublé">
                                                    {meublé.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="Parking" className="custom-padding">
                                                <Form.Label>Parking</Form.Label>
                                                <Form.Select name="parking">
                                                    {parking.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="chauffage" className="custom-padding">
                                                <Form.Label>chauffage</Form.Label>
                                                <Form.Select name="chauffage">
                                                    {chauffage.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group controlId="climatisation" className="custom-padding">
                                                <Form.Label>climatisation</Form.Label>
                                                <Form.Select name="climatisation">
                                                    {climatisation.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group controlId="Vue" className="custom-padding">
                                                <Form.Label>Vue</Form.Label>
                                                <Form.Select name="vue">
                                                    {vues.map(vue => <option key={vue.key} value={vue.value}>{vue.key}</option>)}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            )}

                        </div>

                    )}

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {!showPartTwo && (
                    <Button variant="primary" onClick={handleNext}>
                        Next
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};
