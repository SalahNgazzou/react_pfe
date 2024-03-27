import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import './add.css';

export const Biens = ({ showModal, handleClose }) => {
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

    const dispo = [{ key: "En cours", value: "En cours" }, { key: "Vendu", value: "Vendu" }, { key: "Louée", value: "Louée" }];
    /*  const meublé = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const jardin = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const piscin = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const garage = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const chauffage = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const climatisation = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const balcon = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const etages = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const ascenceur = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const parking = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const vues = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
     const terasses = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }]; */
    const exicte = [{ key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
    const commerces = [{ key: "Boutique", value: "Boutique" }, { key: "Restaurant", value: "Restaurant" }, { key: "Bureau", value: "Bureau" }, { key: "Autre", value: "Autre" }];
    const immeubles = [{ key: "Résidentiel", value: "Résidentiel" }, { key: "Commercial", value: "Commercial" }, { key: "Mixte", value: "Mixte" }]
    const accessibilités = [{ key: "24h/24h", value: "24h/24h" }];
    const stokages = [{ key: "Température contrôlée", value: "Température contrôlée" }, { key: "Contrôle de l'humidité ", value: "Contrôle de l'humidité " }, { key: "Contrôle de la lumière ", value: "Contrôle de la lumière " }, { key: "Sécurité contre les incendies  ", value: "Sécurité contre les incendies  " }, { key: "Autre", value: "Autre" }]
    const industries = [{ key: "Alimentaire", value: "Alimentaire" }, { key: "Chimique", value: "Chimique" }, { key: "Électronique ", value: "Électronique " }, { key: "Textile ", value: "Textile " }, { key: "Autre", value: "Autre" }]
    const usage_autorisé = [{ key: "Résidentiel", value: "Résidentiel" }, { key: "Commercial", value: "Commercial" }, { key: "Industriel", value: "Industriel" }, { key: "Récréatif", value: "Récréatif" }, { key: "Agricole", value: "Agricole" }, { key: "Mixte", value: "Mixte" }];
    const services = [{ key: "Nettoyage", value: "Nettoyage" }, { key: "Réparation", value: "Réparation" }];
    const categories = [{ key: "A vendre", value: "A vendre" }, { key: "A louer", value: "A louer" }];
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


    const [user, setUser] = useState(null);
    const [selectedType, setSelectedType] = useState('');
    const [images, setImages] = useState([]);


    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };
    useEffect(() => {
        // Récupérer les données de l'utilisateur depuis le localStorage
        const userData = localStorage.getItem('user-info');
        const parsedUser = userData ? JSON.parse(userData).user ?? "" : null;

        setUser(parsedUser);
    }, []);

    /*  const handleSubmit = async (e) => {
         e.preventDefault();
         const formData = new FormData();
         formData.append('title', title);
         formData.append('description', description);
         images.forEach((image) => {
           formData.append('images[]', image);
         });
     
         try {
           const response = await fetch('YOUR_API_ENDPOINT', {
             method: 'POST',
             body: formData,
           });
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const data = await response.json();
           console.log(data);
         } catch (error) {
           console.error(error);
         }
       }; */

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };
    console.log(selectedType)

    const renderInputsBasedOnType = () => {
        switch (selectedType) {
            case 'Villa':
                return (
                    <div>
                        {/* Inputs specific to Villa */}

                        <Form.Group className="custom-padding">
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
                                <Form.Group className="custom-padding">
                                    <Form.Label>Nombre de chambres :</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Entrer le nombre de chambres"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Nombre de salles de bain :</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Entrer le nombre de salles de bain"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="custom-padding">
                            <Form.Label>proximité</Form.Label>
                            <Form.Control type="text" name="proximité" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé">
                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>jardin</Form.Label>
                                    <Form.Select name="jardin">
                                        {exicte.map(jard => <option key={jard.key} value={jard.value}>{jard.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>piscin</Form.Label>
                                    <Form.Select name="climatisation">
                                        {exicte.map(pis => <option key={pis.key} value={pis.value}>{pis.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>garage</Form.Label>
                                    <Form.Select name="garage">
                                        {exicte.map(gara => <option key={gara.key} value={gara.value}>{gara.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage">
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation">
                                        {exicte.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                    </div>
                );
            case 'Appartement':
                return (
                    <div>
                        {/* Inputs specific to Appartement */}

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
                        <Col>
                            <Form.Group controlId="etage" className="custom-padding">
                                <Form.Label>etage</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Etage numéro ..."
                                />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Group controlId="balcon" className="custom-padding">
                                    <Form.Label>balcon</Form.Label>
                                    <Form.Select name="balcon">
                                        {exicte.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur">
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="meublé" className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé">
                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking">
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="chauffage" className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage">
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="climatisation" className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation">
                                        {exicte.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            case 'Duplex':
                return (
                    <div>
                        {/* Inputs specific to Duplex */}

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
                        <Col>
                            <Form.Group controlId="etage" className="custom-padding">
                                <Form.Label>etage</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Etage numéro ..."
                                />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking">
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur">
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="meublé" className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé">
                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="balcon" className="custom-padding">
                                    <Form.Label>balcon</Form.Label>
                                    <Form.Select name="balcon">
                                        {exicte.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="vue" className="custom-padding">
                                    <Form.Label>vue</Form.Label>
                                    <Form.Select name="vue">
                                        {exicte.map(vue => <option key={vue.key} value={vue.value}>{vue.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="terasse" className="custom-padding">
                                    <Form.Label>terasse</Form.Label>
                                    <Form.Select name="terasse">
                                        {exicte.map(terasse => <option key={terasse.key} value={terasse.value}>{terasse.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="chauffage" className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage">
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="climatisation" className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation">
                                        {exicte.map(clim => <option key={clim.key} value={clim.value}>{clim.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>



                    </div>
                );
            case 'Parking/Garage':
                return (
                    <div>
                        <Row>
                            <Col>
                                <Form.Group controlId="Nombre de Place " className="custom-padding">
                                    <Form.Label>Nombre de Place </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_place"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Nombre de Place " className="custom-padding">
                                    <Form.Label>Dimension </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="dimension"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Securité" className="custom-padding">
                                    <Form.Label>Securité</Form.Label>
                                    <Form.Select name="secuirité">
                                        {exicte.map(sec => <option key={sec.key} value={sec.value}>{sec.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Accessibilité" className="custom-padding">
                                    <Form.Label>Accessibilité</Form.Label>
                                    <Form.Select name="accessibilité">
                                        {accessibilités.map(accessibilité => <option key={accessibilité.key} value={accessibilité.value}>{accessibilité.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Service" className="custom-padding">
                                    <Form.Label>Service</Form.Label>
                                    <Form.Select name="service">
                                        {services.map(service => <option key={service.key} value={service.value}>{service.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>




                    </div>

                );
            case 'Terrain':
                return (
                    <div>
                        <Row>
                            <Col>
                                <Form.Group controlId="Usage autorisé" className="custom-padding">
                                    <Form.Label>Usage autorisé</Form.Label>
                                    <Form.Select name="usage_autorisé">
                                        {usage_autorisé.map(usage => <option key={usage.key} value={usage.value}>{usage.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Acces aux services publique" className="custom-padding">
                                    <Form.Label>Acces aux services publique</Form.Label>
                                    <Form.Select name="service_public">
                                        {exicte.map(acces => <option key={acces.key} value={acces.value}>{acces.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Cloture" className="custom-padding">
                                    <Form.Label>Cloture</Form.Label>
                                    <Form.Select name="cloture">
                                        {exicte.map(Cloture => <option key={Cloture.key} value={Cloture.value}>{Cloture.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Titre de propriéte" className="custom-padding">
                                    <Form.Label>Titre de propriéte</Form.Label>
                                    <Form.Select name="titre_proprité">
                                        {exicte.map(titire => <option key={titire.key} value={titire.value}>{titire.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            case 'Immeuble':
                return (
                    <div>
                        <Form.Group controlId="Type Immeuble" className="custom-padding">
                            <Form.Label>Type Immeuble</Form.Label>
                            <Form.Select name="type_immeuble">
                                {immeubles.map(immeuble => <option key={immeuble.key} value={immeuble.value}>{immeuble.key}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Row>

                            <Col>
                                <Form.Group controlId="Nombre des appartement" className="custom-padding">
                                    <Form.Label>Nombre des appartement</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_appartement"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Nombre des etages " className="custom-padding">
                                    <Form.Label>Nombre des etages </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_etage"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Année de Constructuion" className="custom-padding">
                                    <Form.Label>Année de Constructuion</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="année_construction"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Superficie total" className="custom-padding">
                                    <Form.Label>Superficie total (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            id="Superficie total"
                                            placeholder="Entrer la Superficie en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Superficie par appartement " className="custom-padding">
                                    <Form.Label>Superficie par appartement  (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            id="Superficie par appartement "
                                            placeholder="Entrer la Superficie par appartement  en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Espace Communs" className="custom-padding">
                                    <Form.Label>Espace Communs</Form.Label>
                                    <Form.Select name="espace_commun">
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur">
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking">
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            case 'Local Commercial':
                return (
                    <div>
                        <Form.Group controlId="Type de commerce autorisé" className="custom-padding">
                            <Form.Label>Type de commerce autorisé</Form.Label>
                            <Form.Select name="type_commerce_autorisé">
                                {commerces.map(commerce => <option key={commerce.key} value={commerce.value}>{commerce.key}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="Superficie " className="custom-padding">
                            <Form.Label>Superficie  (m²):</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="number"
                                    name="superficie"
                                    placeholder="Entrer la Superficie en m²"
                                    aria-describedby="m2-addon"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="m2-addon">m²</span>
                                </div>
                            </div>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="Visibilté" className="custom-padding">
                                    <Form.Label>Visibilté</Form.Label>
                                    <Form.Select name="visibilité">
                                        {exicte.map(vis => <option key={vis.key} value={vis.value}>{vis.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Equipement" className="custom-padding">
                                    <Form.Label>Equipement</Form.Label>
                                    <Form.Select name="equipement">
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking">
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            case 'Usine':
                return (
                    <div>
                        <Form.Group controlId="Type d'industrie" className="custom-padding">
                            <Form.Label>Type d'industrie</Form.Label>
                            <Form.Select name="type_industrie">
                                {industries.map(industrie => <option key={industrie.key} value={industrie.value}>{industrie.key}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="Superficie total" className="custom-padding">
                                    <Form.Label>Superficie total (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="superficie_total"
                                            placeholder="Entrer la Superficie en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Superficie batie " className="custom-padding">
                                    <Form.Label>Superficie batie  (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="superficie_batie"
                                            placeholder="Entrer la Superficie batie  en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Superficie de terre " className="custom-padding">
                                    <Form.Label>Superficie de terre  (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="superficie_terre"
                                            placeholder="Entrer la Superficie de terre  en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Equipement" className="custom-padding">
                                    <Form.Label>Equipement</Form.Label>
                                    <Form.Select name="equipement">
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Acces aux transport " className="custom-padding">
                                    <Form.Label>Acces aux transport </Form.Label>
                                    <Form.Select name="acces_tansport">
                                        {exicte.map(acces => <option key={acces.key} value={acces.value}>{acces.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            case 'Entrepot':
                return (
                    <div>
                        <Row>
                            <Col>
                                <Form.Group controlId="Superficie" className="custom-padding">
                                    <Form.Label>Superficie (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="superficie"
                                            placeholder="Entrer la Superficie en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Capacité de stockage" className="custom-padding">
                                    <Form.Label>Capacité de stockage (m²):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="capacité_stockage"
                                            placeholder="Entrer la Capacité en m²"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m²</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Hauteur" className="custom-padding">
                                    <Form.Label>Hauteur (m):</Form.Label>
                                    <div className="input-group">
                                        <Form.Control
                                            type="number"
                                            name="heuteur"
                                            placeholder="Entrer la heuteur en m"
                                            aria-describedby="m2-addon"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="m2-addon">m</span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Equipement" className="custom-padding">
                                    <Form.Label>Equipement</Form.Label>
                                    <Form.Select name="equipement">
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Securité" className="custom-padding">
                                    <Form.Label>Securité</Form.Label>
                                    <Form.Select name="secuirité">
                                        {exicte.map(sec => <option key={sec.key} value={sec.value}>{sec.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Condition de stockage " className="custom-padding">
                                    <Form.Label>Condition de stockage </Form.Label>
                                    <Form.Select name="condition_stockage">
                                        {stokages.map(stockage => <option key={stockage.key} value={stockage.value}>{stockage.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            default:
                return null;
        }
    }
    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Biens</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>


                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                        <h4>Bien</h4>

                        <Form.Group className="custom-padding">
                            <Form.Label>Type</Form.Label>
                            <Form.Select name="type_biens" onChange={handleTypeChange}>
                                {types.map((type, index) => (
                                    <option key={type.value} value={type.value}>{type.key}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="custom-padding">
                            <Form.Label>Categorie</Form.Label>
                            <Form.Select name="categorie">
                                {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.key}</option>)}
                            </Form.Select>
                        </Form.Group>
                        {user && (
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Group className="custom-padding">
                                            <Form.Label>user name</Form.Label>
                                            <Form.Control type="text" name="user_name" value={user.name} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="custom-padding">
                                            <Form.Label>user lastname</Form.Label>
                                            <Form.Control type="text" name="user_lastName" value={user.last_name} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="custom-padding">
                                            <Form.Label>user email</Form.Label>
                                            <Form.Control type="text" name="user_email" value={user.email} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="custom-padding">
                                            <Form.Label>user phone</Form.Label>
                                            <Form.Control type="text" name="user_phone" value={user.num_phone} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        )}
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>propritair name</Form.Label>
                                    <Form.Control type="text" name="propritair_name" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>proritaire phone</Form.Label>
                                    <Form.Control type="text" name="proritaire_phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="custom-padding">
                            <Form.Label>Disponibilité</Form.Label>
                            <Form.Select name="disponibilité">
                                {dispo.map(disp => <option key={disp.value} value={disp.value}>{disp.key}</option>)}
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="custom-padding">
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
                                <Form.Group className="custom-padding">
                                    <Form.Label>Adresse</Form.Label>
                                    <Form.Control type="text" name="addresse" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Gouvernorat</Form.Label>
                                    <Form.Select name="gouvernorats">
                                        {gouvernorats.map(gouv => <option key={gouv.key} value={gouv.value}>{gouv.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Ville</Form.Label>
                                    <Form.Control type="text" name="ville" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="custom-padding">
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
                        {renderInputsBasedOnType()}
                    </div>
                    



                </Form>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
};
