import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import './add.css';
import { postBien } from '../../utils/postData';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FaSave } from 'react-icons/fa';


export const Biens = ({ showModal, handleClose }) => {
    const types = [
        { key: "", value: "" },
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

    const dispo = [{ key: "", value: "" }, { key: "En cours", value: "En cours" }, { key: "Vendu", value: "Vendu" }, { key: "Louée", value: "Louée" }];
    const etats = [{ key: "", value: "" }, { key: "Neuf", value: "Neuf" }, { key: "Ancienne", value: "Ancienne" }];
    const exicte = [{ key: "", value: "" }, { key: "Oui", value: "Oui" }, { key: "Non", value: "Non" }];
    const annonces = [{ key: "", value: "" }, { key: "Masquer", value: "Masquer" }, { key: "Publier", value: "Publier" }];
    const commerces = [{ key: "", value: "" }, { key: "Boutique", value: "Boutique" }, { key: "Restaurant", value: "Restaurant" }, { key: "Bureau", value: "Bureau" }, { key: "Autre", value: "Autre" }];
    const immeubles = [{ key: "", value: "" }, { key: "Résidentiel", value: "Résidentiel" }, { key: "Commercial", value: "Commercial" }, { key: "Mixte", value: "Mixte" }]
    const accessibilités = [{ key: "", value: "" }, { key: "24h/24h", value: "24h/24h" }];
    const stokages = [{ key: "", value: "" }, { key: "Température contrôlée", value: "Température contrôlée" }, { key: "Contrôle de l'humidité ", value: "Contrôle de l'humidité " }, { key: "Contrôle de la lumière ", value: "Contrôle de la lumière " }, { key: "Sécurité contre les incendies  ", value: "Sécurité contre les incendies  " }, { key: "Autre", value: "Autre" }]
    const industries = [{ key: "", value: "" }, { key: "Alimentaire", value: "Alimentaire" }, { key: "Chimique", value: "Chimique" }, { key: "Électronique ", value: "Électronique " }, { key: "Textile ", value: "Textile " }, { key: "Autre", value: "Autre" }]
    const usage_autorisé = [{ key: "", value: "" }, { key: "Résidentiel", value: "Résidentiel" }, { key: "Commercial", value: "Commercial" }, { key: "Industriel", value: "Industriel" }, { key: "Récréatif", value: "Récréatif" }, { key: "Agricole", value: "Agricole" }, { key: "Mixte", value: "Mixte" }];
    const services = [{ key: "", value: "" }, { key: "Nettoyage", value: "Nettoyage" }, { key: "Réparation", value: "Réparation" }];
    const categories = [{ key: "", value: "" }, { key: "A vendre", value: "A vendre" }, { key: "A louer", value: "A louer" }];
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
    const [user, setUser] = useState(null);
    const [data, setData] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [inputsData, setInputsData] = useState({
        type_biens: '',
        categorie: '',
        propritair_name: '',
        proritaire_phone: '',
        disponibilté: '',
        description: '',
        etat: '',
        addresse: '',
        gouvernant: '',
        ville: '',
        prix: '',
        surface: '',
        nbr_chombre: '',
        nbr_salle_de_bain: '',
        proximité: '',
        meublé: '',
        annonce: 'Masquer',
        jardin: '',
        piscin: '',
        garage: '',
        balcon: '',
        etage: '',
        vue: '',
        terasse: '',
        ascenceur: '',
        parking: '',
        chauffage: '',
        climatisation: '',
        nbr_place: '',
        dimension: '',
        secuirité: '',
        accessibilité: '',
        service: '',
        superficie: '',
        type_commerce_autorisé: '',
        visibilité: '',
        usage_autorisé: '',
        service_public: '',
        cloture: '',
        titre_proprité: '',
        nbr_appartement: '',
        nbr_etage: '',
        année_construction: '',
        superficie_total: '',
        superficie_appartement: '',
        type_immeuble: '',
        espace_commun: '',
        superficie_batie: '',
        superficie_terre: '',
        type_industrie: '',
        equipement: '',
        acces_tansport: '',
        capacité_stockage: '',
        heuteur: '',
        condition_stockage: '',
        id_user: '',
        images: [],
    });

    useEffect(() => {
        // Récupérer les données de l'utilisateur depuis le localStorage
        const userData = localStorage.getItem('user-info');
        const parsedUser = userData ? JSON.parse(userData).user ?? "" : null;

        setUser(parsedUser);
    }, []);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setInputsData((prev) => ({
            ...prev,
            images: files,
        }));
    };
    const ajouterBiens = async () => {
        const formData = new FormData();
        if (!inputsData.type_biens || !inputsData.categorie || !inputsData.propritair_name || !inputsData.proritaire_phone || !inputsData.disponibilté || !inputsData.prix || !inputsData.description || !inputsData.etat || !inputsData.addresse || !inputsData.gouvernant || !inputsData.ville) {
            alert("verifier les champs obilgatoire !");
        }
        const { images, ...inputs } = inputsData;
        const data = {
            ...inputs,
            id_user: user.id,

        };
        // Ajouter les champs à FormData en fonction de leur nom

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        for (const file of images) {
            formData.append("images[]", file);
        }
        
        postBien({ url: "biens", data: formData })
        setShowSuccessMessage(true);

        setTimeout(handleClose, 2000);
    };

    const renderInputsBasedOnType = () => {
        switch (inputsData.type_biens) {
            case 'Villa':
                return (
                    <div>
                        {/* Inputs specific to Villa */}

                        <Form.Group className="custom-padding">
                            <Form.Label>Surface (m²):</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="number"
                                    name="surface"
                                    placeholder="Entrer la surface en m²"
                                    aria-describedby="m2-addon"
                                    onChange={(e) => setInputsData({ ...inputsData, surface: e.target.value })}
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
                                        name="nbr_chombre"
                                        placeholder="Entrer le nombre de chambres"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_chombre: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Nombre de salles de bain :</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_salle_de_bain"
                                        placeholder="Entrer le nombre de salles de bain"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_salle_de_bain: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Form.Group className="custom-padding">
                            <Form.Label>proximité</Form.Label>
                            <Form.Control type="text" name="proximité"
                                onChange={(e) => setInputsData({ ...inputsData, proximité: e.currentTarget.value })}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé"
                                        onChange={(e) => setInputsData({ ...inputsData, meublé: e.target.value })}

                                    >

                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}

                                    </Form.Select>

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>jardin</Form.Label>
                                    <Form.Select name="jardin"
                                        onChange={(e) => setInputsData({ ...inputsData, jardin: e.target.value })}
                                    >
                                        {exicte.map(jard => <option key={jard.key} value={jard.value}>{jard.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>piscin</Form.Label>
                                    <Form.Select name="piscin"
                                        onChange={(e) => setInputsData({ ...inputsData, piscin: e.target.value })}

                                    >
                                        {exicte.map(pis => <option key={pis.key} value={pis.value}>{pis.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>garage</Form.Label>
                                    <Form.Select name="garage"
                                        onChange={(e) => setInputsData({ ...inputsData, garage: e.target.value })}

                                    >
                                        {exicte.map(gara => <option key={gara.key} value={gara.value}>{gara.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage"
                                        onChange={(e) => setInputsData({ ...inputsData, chauffage: e.target.value })}
                                    >
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation"
                                        onChange={(e) => setInputsData({ ...inputsData, climatisation: e.target.value })}
                                    >

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
                                    name="surface"
                                    placeholder="Entrer la surface en m²"
                                    aria-describedby="m2-addon"
                                    onChange={(e) => setInputsData({ ...inputsData, surface: e.currentTarget.value })}

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
                                        name="nbr_chombre"
                                        placeholder="Entrer le nombre de chambres"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_chombre: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="nombreSallesDeBain" className="custom-padding">
                                    <Form.Label>Nombre de salles de bain :</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_salle_de_bain"
                                        placeholder="Entrer le nombre de salles de bain"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_salle_de_bain: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="proximité" className="custom-padding">
                            <Form.Label>proximité</Form.Label>
                            <Form.Control type="text" name="proximité"

                                onChange={(e) => setInputsData({ ...inputsData, proximité: e.currentTarget.value })}

                            />
                        </Form.Group>
                        <Col>
                            <Form.Group controlId="etage" className="custom-padding">
                                <Form.Label>etage</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="etage"
                                    placeholder="Etage numéro ..."
                                    onChange={(e) => setInputsData({ ...inputsData, etage: e.currentTarget.value })}

                                />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Group controlId="balcon" className="custom-padding">
                                    <Form.Label>balcon</Form.Label>
                                    <Form.Select name="balcon"

                                        onChange={(e) => setInputsData({ ...inputsData, balcon: e.target.value })}

                                    >
                                        {exicte.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur"

                                        onChange={(e) => setInputsData({ ...inputsData, ascenceur: e.target.value })}

                                    >
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="meublé" className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé"

                                        onChange={(e) => setInputsData({ ...inputsData, meublé: e.target.value })}

                                    >
                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking"

                                        onChange={(e) => setInputsData({ ...inputsData, parking: e.target.value })}


                                    >
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="chauffage" className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage"

                                        onChange={(e) => setInputsData({ ...inputsData, chauffage: e.target.value })}

                                    >
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="climatisation" className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation"

                                        onChange={(e) => setInputsData({ ...inputsData, climatisation: e.target.value })}

                                    >
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
                                    name="surface"
                                    placeholder="Entrer la surface en m²"
                                    aria-describedby="m2-addon"
                                    onChange={(e) => setInputsData({ ...inputsData, surface: e.currentTarget.value })}

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
                                        name="nbr_chombre"
                                        placeholder="Entrer le nombre de chambres"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_chombre: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="nombreSallesDeBain" className="custom-padding">
                                    <Form.Label>Nombre de salles de bain :</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_salle_de_bain"
                                        placeholder="Entrer le nombre de salles de bain"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_salle_de_bain: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="proximité" className="custom-padding">
                            <Form.Label>proximité</Form.Label>
                            <Form.Control type="text" name="proximité"

                                onChange={(e) => setInputsData({ ...inputsData, proximité: e.currentTarget.value })}

                            />
                        </Form.Group>
                        <Col>
                            <Form.Group controlId="etage" className="custom-padding">
                                <Form.Label>etage</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="etage"
                                    placeholder="Etage numéro ..."
                                    onChange={(e) => setInputsData({ ...inputsData, etage: e.currentTarget.value })}

                                />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking"

                                        onChange={(e) => setInputsData({ ...inputsData, parking: e.target.value })}

                                    >
                                        {exicte.map(park => <option key={park.key} value={park.value}>{park.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur"

                                        onChange={(e) => setInputsData({ ...inputsData, ascenceur: e.target.value })}

                                    >
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="meublé" className="custom-padding">
                                    <Form.Label>meublé</Form.Label>
                                    <Form.Select name="meublé"

                                        onChange={(e) => setInputsData({ ...inputsData, meublé: e.target.value })}

                                    >
                                        {exicte.map(meub => <option key={meub.key} value={meub.value}>{meub.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="balcon" className="custom-padding">
                                    <Form.Label>balcon</Form.Label>
                                    <Form.Select name="balcon"

                                        onChange={(e) => setInputsData({ ...inputsData, balcon: e.target.value })}

                                    >
                                        {exicte.map(bal => <option key={bal.key} value={bal.value}>{bal.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="vue" className="custom-padding">
                                    <Form.Label>vue</Form.Label>
                                    <Form.Select name="vue"

                                        onChange={(e) => setInputsData({ ...inputsData, vue: e.target.value })}

                                    >
                                        {exicte.map(vue => <option key={vue.key} value={vue.value}>{vue.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="terasse" className="custom-padding">
                                    <Form.Label>terasse</Form.Label>
                                    <Form.Select name="terasse"

                                        onChange={(e) => setInputsData({ ...inputsData, terasse: e.target.value })}

                                    >
                                        {exicte.map(terasse => <option key={terasse.key} value={terasse.value}>{terasse.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="chauffage" className="custom-padding">
                                    <Form.Label>chauffage</Form.Label>
                                    <Form.Select name="chauffage"

                                        onChange={(e) => setInputsData({ ...inputsData, chauffage: e.target.value })}


                                    >
                                        {exicte.map(chouff => <option key={chouff.key} value={chouff.value}>{chouff.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="climatisation" className="custom-padding">
                                    <Form.Label>climatisation</Form.Label>
                                    <Form.Select name="climatisation"

                                        onChange={(e) => setInputsData({ ...inputsData, climatisation: e.target.value })}

                                    >
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
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_place: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Nombre de Place " className="custom-padding">
                                    <Form.Label>Dimension </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="dimension"
                                        onChange={(e) => setInputsData({ ...inputsData, dimension: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="Securité" className="custom-padding">
                                    <Form.Label>Securité</Form.Label>
                                    <Form.Select name="secuirité"

                                        onChange={(e) => setInputsData({ ...inputsData, secuirité: e.target.value })}

                                    >
                                        {exicte.map(sec => <option key={sec.key} value={sec.value}>{sec.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Accessibilité" className="custom-padding">
                                    <Form.Label>Accessibilité</Form.Label>
                                    <Form.Select name="accessibilité"

                                        onChange={(e) => setInputsData({ ...inputsData, accessibilité: e.target.value })}

                                    >
                                        {accessibilités.map(accessibilité => <option key={accessibilité.key} value={accessibilité.value}>{accessibilité.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Service" className="custom-padding">
                                    <Form.Label>Service</Form.Label>
                                    <Form.Select name="service"


                                        onChange={(e) => setInputsData({ ...inputsData, service: e.target.value })}

                                    >
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
                                    <Form.Select name="usage_autorisé"


                                        onChange={(e) => setInputsData({ ...inputsData, usage_autorisé: e.target.value })}

                                    >
                                        {usage_autorisé.map(usage => <option key={usage.key} value={usage.value}>{usage.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Acces aux services publique" className="custom-padding">
                                    <Form.Label>Acces aux services publique</Form.Label>
                                    <Form.Select name="service_public"
                                        onChange={(e) => setInputsData({ ...inputsData, service_public: e.target.value })}

                                    >
                                        {exicte.map(acces => <option key={acces.key} value={acces.value}>{acces.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Cloture" className="custom-padding">
                                    <Form.Label>Cloture</Form.Label>
                                    <Form.Select name="cloture"

                                        onChange={(e) => setInputsData({ ...inputsData, cloture: e.target.value })}

                                    >
                                        {exicte.map(Cloture => <option key={Cloture.key} value={Cloture.value}>{Cloture.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Titre de propriéte" className="custom-padding">
                                    <Form.Label>Titre de propriéte</Form.Label>
                                    <Form.Select name="titre_proprité"

                                        onChange={(e) => setInputsData({ ...inputsData, titre_proprité: e.target.value })}

                                    >
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
                            <Form.Select name="type_immeuble"

                                onChange={(e) => setInputsData({ ...inputsData, type_immeuble: e.target.value })}

                            >
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
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_appartement: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Nombre des etages " className="custom-padding">
                                    <Form.Label>Nombre des etages </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="nbr_etage"
                                        onChange={(e) => setInputsData({ ...inputsData, nbr_etage: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Année de Constructuion" className="custom-padding">
                                    <Form.Label>Année de Constructuion</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="année_construction"
                                        onChange={(e) => setInputsData({ ...inputsData, année_construction: e.currentTarget.value })}

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
                                            name="superficie_total"
                                            onChange={(e) => setInputsData({ ...inputsData, superficie_total: e.currentTarget.value })}

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
                                            name="superficie_appartement"
                                            onChange={(e) => setInputsData({ ...inputsData, superficie_appartement: e.currentTarget.value })}

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
                                    <Form.Select name="espace_commun"

                                        onChange={(e) => setInputsData({ ...inputsData, espace_commun: e.target.value })}

                                    >
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ascenceur" className="custom-padding">
                                    <Form.Label>ascenceur</Form.Label>
                                    <Form.Select name="ascenceur"
                                        onChange={(e) => setInputsData({ ...inputsData, ascenceur: e.target.value })}

                                    >
                                        {exicte.map(asc => <option key={asc.key} value={asc.value}>{asc.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking"

                                        onChange={(e) => setInputsData({ ...inputsData, parking: e.target.value })}

                                    >
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
                            <Form.Select name="type_commerce_autorisé"

                                onChange={(e) => setInputsData({ ...inputsData, type_commerce_autorisé: e.target.value })}

                            >
                                {commerces.map(commerce => <option key={commerce.key} value={commerce.value}>{commerce.key}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="Superficie " className="custom-padding">
                            <Form.Label>Superficie  (m²):</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="number"
                                    name="superficie"
                                    onChange={(e) => setInputsData({ ...inputsData, superficie: e.currentTarget.value })}

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
                                    <Form.Select name="visibilité"

                                        onChange={(e) => setInputsData({ ...inputsData, visibilité: e.target.value })}


                                    >
                                        {exicte.map(vis => <option key={vis.key} value={vis.value}>{vis.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Equipement" className="custom-padding">
                                    <Form.Label>Equipement</Form.Label>
                                    <Form.Select name="equipement"
                                        onChange={(e) => setInputsData({ ...inputsData, equipement: e.target.value })}

                                    >
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Parking" className="custom-padding">
                                    <Form.Label>Parking</Form.Label>
                                    <Form.Select name="parking"

                                        onChange={(e) => setInputsData({ ...inputsData, parking: e.target.value })}

                                    >
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
                            <Form.Select name="type_industrie"

                                onChange={(e) => setInputsData({ ...inputsData, type_industrie: e.target.value })}

                            >
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
                                            onChange={(e) => setInputsData({ ...inputsData, superficie_total: e.currentTarget.value })}

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
                                            onChange={(e) => setInputsData({ ...inputsData, superficie_batie: e.currentTarget.value })}

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
                                            onChange={(e) => setInputsData({ ...inputsData, superficie_terre: e.currentTarget.value })}

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
                                    <Form.Select name="equipement"
                                        onChange={(e) => setInputsData({ ...inputsData, equipement: e.target.value })}


                                    >
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Acces aux transport " className="custom-padding">
                                    <Form.Label>Acces aux transport </Form.Label>
                                    <Form.Select name="acces_tansport"

                                        onChange={(e) => setInputsData({ ...inputsData, acces_tansport: e.target.value })}

                                    >
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
                                            onChange={(e) => setInputsData({ ...inputsData, superficie: e.currentTarget.value })}

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
                                            onChange={(e) => setInputsData({ ...inputsData, capacité_stockage: e.currentTarget.value })}

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
                                            onChange={(e) => setInputsData({ ...inputsData, heuteur: e.currentTarget.value })}

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
                                    <Form.Select name="equipement"

                                        onChange={(e) => setInputsData({ ...inputsData, equipement: e.target.value })}

                                    >
                                        {exicte.map(equip => <option key={equip.key} value={equip.value}>{equip.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Securité" className="custom-padding">
                                    <Form.Label>Securité</Form.Label>
                                    <Form.Select name="secuirité"

                                        onChange={(e) => setInputsData({ ...inputsData, secuirité: e.target.value })}

                                    >
                                        {exicte.map(sec => <option key={sec.key} value={sec.value}>{sec.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="Condition de stockage " className="custom-padding">
                                    <Form.Label>Condition de stockage </Form.Label>
                                    <Form.Select name="condition_stockage"

                                        onChange={(e) => setInputsData({ ...inputsData, condition_stockage: e.target.value })}

                                    >
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
                <Modal.Title>Ajouter Bien</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>


                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                        <h4>Les champs qui contient (*) sont obilgatoire</h4>

                        <Form.Group className="custom-padding">
                            <Form.Label>Type* :</Form.Label>
                            <Form.Select name="type_biens"

                                onChange={(e) => setInputsData({ ...inputsData, type_biens: e.target.value })}
                                value={inputsData.type_biens}
                            >
                                {types.map((type, index) => (
                                    <option key={type.value} value={type.value}>{type.key}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="custom-padding">
                            <Form.Label>Categorie* :</Form.Label>
                            <Form.Select name="categorie"

                                onChange={(e) => setInputsData({ ...inputsData, categorie: e.target.value })}

                            >
                                {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.key}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>propritair name* :</Form.Label>
                                    <Form.Control type="text" name="propritair_name" required
                                        onChange={(e) => setInputsData({ ...inputsData, propritair_name: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>proritaire phone* :</Form.Label>
                                    <Form.Control type="text" name="proritaire_phone" required
                                        onChange={(e) => setInputsData({ ...inputsData, proritaire_phone: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="custom-padding">
                            <Form.Label>disponibilté* :</Form.Label>
                            <Form.Select name="disponibilté"
                                required
                                onChange={(e) => setInputsData({ ...inputsData, disponibilté: e.target.value })}

                            >
                                {dispo.map(disp => <option key={disp.value} value={disp.value}>{disp.key}</option>)}
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="custom-padding">
                            <Form.Label>Description* :</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                onChange={(e) => setInputsData({ ...inputsData, description: e.currentTarget.value })}

                                rows={4} // Adjust the number of rows as needed
                                placeholder="Enter description"
                            />
                        </Form.Group>
                        <Form.Group className="custom-padding">
                            <Form.Label>etat* :</Form.Label>
                            <Form.Select
                                required
                                name="etat"
                                onChange={(e) => setInputsData({ ...inputsData, etat: e.currentTarget.value })}
                            >
                                {etats.map(etat => (
                                    <option key={etat.value} value={etat.value}>
                                        {etat.key}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Adresse* :</Form.Label>
                                    <Form.Control type="text" name="addresse"
                                        onChange={(e) => setInputsData({ ...inputsData, addresse: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Gouvernorat* :</Form.Label>
                                    <Form.Select name="gouvernant"

                                        onChange={(e) => setInputsData({ ...inputsData, gouvernant: e.target.value })}

                                    >
                                        {gouvernorats.map(gouv => <option key={gouv.key} value={gouv.value}>{gouv.key}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="custom-padding">
                                    <Form.Label>Ville* :</Form.Label>
                                    <Form.Control type="text" name="ville"


                                        onChange={(e) => setInputsData({ ...inputsData, ville: e.currentTarget.value })}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="custom-padding">
                            <Form.Label>Prix* (DT):</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type="number"
                                    name="prix"
                                    onChange={(e) => setInputsData({ ...inputsData, prix: e.currentTarget.value })}

                                    placeholder="Entrer le prix en DT"
                                    aria-describedby="dt-addon"

                                />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="dt-addon">DT</span>
                                </div>
                            </div>
                        </Form.Group>
                        {user && user.role === "Admin" && (
                            <Form.Group className="custom-padding">
                                <Form.Label>Annonce</Form.Label>
                                <Form.Select
                                    name="annonce"
                                    onChange={(e) => setInputsData({ ...inputsData, annonce: e.target.value })}
                                >
                                    {annonces.map(annonce => (
                                        <option key={annonce.key} value={annonce.value}>{annonce.key}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        )}

                        {renderInputsBasedOnType()}
                        <div>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="upload-button"
                                multiple
                                type="file"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="upload-button">
                                <IconButton style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} aria-label="upload picture" component="span">
                                    <CloudUploadIcon style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} />
                                </IconButton >
                                <span>Upload Images</span>
                            </label>
                        </div>

                    </div>

                </Form>
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert">
                        Le bien a été ajouté avec succès !
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} onClick={ajouterBiens}>
                    <FaSave />
                    <span> Save</span>
                </Button>
            </Modal.Footer>
        </Modal >
    );
};
