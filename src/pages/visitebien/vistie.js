import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Form, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './visite.css'
import { FaBed, FaPaperPlane, FaRuler, FaCar, FaShower, FaMapMarkerAlt, FaCouch, FaTree, FaSwimmingPool, FaFire, FaSnowflake } from 'react-icons/fa';
import { getBien } from '../../utils/VisiteurUtils/getBien';
import { PostEstimation } from '../../utils/VisiteurUtils/postEstimation';
export const VisiteBien = () => {

  const { id } = useParams();
  const [biendata, setBienData] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("Bonjour,je suis interessé(e)");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
const id_bien = id;
const id_user=biendata &&biendata.user_details.id;
const etat = 'en attente '
  useEffect(() => {
    getBien({ setData: setBienData, url: "visiteur/" + id });
  }, [id]);
  console.log(biendata);

  useEffect(() => {
    if (biendata && biendata.images) {
      setImages(biendata.images);
    }
  }, [biendata]);

const envoyer=()=>{
let item={id_bien,id_user,name,phone,email,message,etat}
PostEstimation({url:'visiteur/commentair',items:item})
}
  const table = () => {
    switch (biendata?.type_biens) {
      case 'Villa':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}><FaRuler /> Surface (m²)</td>
                  <td style={{ width: '250px' }}>{biendata?.surface} (m²)</td>
                </tr>
                <tr>
                  <td><FaBed /> Chombre</td>
                  <td>{biendata?.nbr_chombre}
                  </td>

                </tr>
                <tr>
                  <td><FaShower /> Salles de bain</td>
                  <td>{biendata?.nbr_salle_de_bain}</td>

                </tr>
                <tr>
                  <td><FaMapMarkerAlt /> Proximité</td>
                  <td>{biendata?.proximité}</td>

                </tr>
                <tr>
                  <td><FaCouch /> Meublé</td>
                  <td>{biendata?.meublé}</td>

                </tr>
                <tr>
                  <td><FaTree /> Jardin</td>
                  <td>{biendata?.jardin}</td>

                </tr>
                <tr>
                  <td><FaSwimmingPool /> Piscin</td>
                  <td>{biendata?.piscin}</td>

                </tr>
                <tr>
                  <td><FaCar /> Garage</td>
                  <td>{biendata?.garage}</td>

                </tr>
                <tr>
                  <td><FaFire /> Chauffage</td>
                  <td>{biendata?.chauffage}</td>

                </tr>
                <tr>
                  <td><FaSnowflake /> Climatisation</td>
                  <td>{biendata?.climatisation}</td>

                </tr>
              </tbody>
            </Table>
          </div>
        )
      case 'Appartement':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Surface (m²)</td>
                  <td style={{ width: '250px' }}>{biendata?.surface} (m²)</td>
                </tr>
                <tr>
                  <td>Chombre</td>
                  <td>{biendata?.nbr_chombre}
                  </td>

                </tr>
                <tr>
                  <td>Salles de bain</td>
                  <td>{biendata?.nbr_salle_de_bain}</td>

                </tr>
                <tr>
                  <td>Proximité</td>
                  <td>{biendata?.proximité}</td>

                </tr>
                <tr>
                  <td>Meublé</td>
                  <td>{biendata?.meublé}</td>

                </tr>
                <tr>
                  <td>Etage</td>
                  <td>{biendata?.etage}</td>

                </tr>
                <tr>
                  <td>Balcon</td>
                  <td>{biendata?.balcon}</td>

                </tr>
                <tr>
                  <td>Ascenceur</td>
                  <td>{biendata?.ascenceur}</td>

                </tr>
                <tr>
                  <td>Parking</td>
                  <td>{biendata?.parking}</td>

                </tr>
                <tr>
                  <td>Chauffage</td>
                  <td>{biendata?.chauffage}</td>

                </tr>
                <tr>
                  <td>Climatisation</td>
                  <td>{biendata?.climatisation}</td>

                </tr>
              </tbody>
            </Table>
          </div>
        )
      case 'Duplex':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Surface (m²)</td>
                  <td style={{ width: '250px' }}>{biendata?.surface} (m²)</td>
                </tr>
                <tr>
                  <td>Chombre</td>
                  <td>{biendata?.nbr_chombre}
                  </td>

                </tr>
                <tr>
                  <td>Salles de bain</td>
                  <td>{biendata?.nbr_salle_de_bain}</td>

                </tr>
                <tr>
                  <td>Proximité</td>
                  <td>{biendata?.proximité}</td>

                </tr>
                <tr>
                  <td>Meublé</td>
                  <td>{biendata?.meublé}</td>

                </tr>
                <tr>
                  <td>Etage</td>
                  <td>{biendata?.etage}</td>

                </tr>
                <tr>
                  <td>Balcon</td>
                  <td>{biendata?.balcon}</td>

                </tr>
                <tr>
                  <td>Vue</td>
                  <td>{biendata?.vue}</td>

                </tr>
                <tr>
                  <td>Terasse</td>
                  <td>{biendata?.terasse}</td>

                </tr>
                <tr>
                  <td>Ascenceur</td>
                  <td>{biendata?.ascenceur}</td>

                </tr>
                <tr>
                  <td>Parking</td>
                  <td>{biendata?.parking}</td>

                </tr>
                <tr>
                  <td>Chauffage</td>
                  <td>{biendata?.chauffage}</td>

                </tr>
                <tr>
                  <td>Climatisation</td>
                  <td>{biendata?.climatisation}</td>

                </tr>
              </tbody>
            </Table>
          </div>
        )
      case 'Parking/Garage':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Nombre de Place</td>
                  <td style={{ width: '250px' }}>{biendata?.nbr_place} (m²)</td>
                </tr>
                <tr>
                  <td>Dimension</td>
                  <td>{biendata?.dimension}
                  </td>

                </tr>
                <tr>
                  <td>Securité</td>
                  <td>{biendata?.secuirité}</td>

                </tr>
                <tr>
                  <td>Accessibilité</td>
                  <td>{biendata?.accessibilité}</td>

                </tr>
                <tr>
                  <td>Service</td>
                  <td>{biendata?.service}</td>

                </tr>

              </tbody>
            </Table>
          </div>
        )
      case 'Terrain':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Usage autorisé</td>
                  <td style={{ width: '250px' }}>{biendata?.usage_autorisé} (m²)</td>
                </tr>
                <tr>
                  <td>Acces aux services publique</td>
                  <td>{biendata?.service_public}
                  </td>

                </tr>
                <tr>
                  <td>Cloture</td>
                  <td>{biendata?.cloture}</td>

                </tr>
                <tr>
                  <td>Titre de propriéte</td>
                  <td>{biendata?.titre_proprité}</td>

                </tr>

              </tbody>
            </Table>
          </div>
        )
      case 'Immeuble':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Type Immeuble</td>
                  <td style={{ width: '250px' }}>{biendata?.type_immeuble} (m²)</td>
                </tr>
                <tr>
                  <td>Nombre des appartements</td>
                  <td>{biendata?.nbr_appartement}
                  </td>

                </tr>
                <tr>
                  <td>Nombre des etages</td>
                  <td>{biendata?.nbr_etage}</td>

                </tr>
                <tr>
                  <td>Année de Constructuion</td>
                  <td>{biendata?.année_construction}</td>

                </tr>
                <tr>
                  <td>Superficie total (m²)</td>
                  <td>{biendata?.superficie_total}</td>

                </tr>
                <tr>
                  <td>Superficie par appartement  (m²)</td>
                  <td>{biendata?.superficie_appartement}</td>

                </tr>
                <tr>
                  <td>Espace Communs</td>
                  <td>{biendata?.espace_commun}</td>

                </tr>

                <tr>
                  <td>Ascenceur</td>
                  <td>{biendata?.ascenceur}</td>

                </tr>
                <tr>
                  <td>Parking</td>
                  <td>{biendata?.parking}</td>

                </tr>

              </tbody>
            </Table>
          </div>
        )
      case 'Local Commercial':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Type de commerce autorisé</td>
                  <td style={{ width: '250px' }}>{biendata?.type_commerce_autorisé} (m²)</td>
                </tr>
                <tr>
                  <td>Superficie  (m²)</td>
                  <td>{biendata?.superficie}
                  </td>

                </tr>
                <tr>
                  <td>Visibilté</td>
                  <td>{biendata?.visibilité}</td>

                </tr>
                <tr>
                  <td>Equipement</td>
                  <td>{biendata?.equipement}</td>

                </tr>
                <tr>
                  <td>Parking</td>
                  <td>{biendata?.parking}</td>

                </tr>

              </tbody>
            </Table>
          </div>
        )
      case 'Usine':
        return (
          <div className='table' style={{ width: '500px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr>
                  <td style={{ width: '250px' }}>Type d'industrie</td>
                  <td style={{ width: '250px' }}>{biendata?.type_industrie} (m²)</td>
                </tr>
                <tr>
                  <td>Superficie total (m²)</td>
                  <td>{biendata?.superficie_total}
                  </td>

                </tr>
                <tr>
                  <td>Superficie batie  (m²)</td>
                  <td>{biendata?.superficie_batie}</td>

                </tr>
                <tr>
                  <td>Superficie de terre  (m²)</td>
                  <td>{biendata?.superficie_terre}</td>

                </tr>
                <tr>
                  <td>Equipement</td>
                  <td>{biendata?.equipement}</td>

                </tr>
                <tr>
                  <td>Acces aux transport</td>
                  <td>{biendata?.acces_tansport}</td>

                </tr>

              </tbody>
            </Table>
          </div>
        )

    }
  }
  return (
    <div className='bien'>
      <div className='buttons'>
        <div className='back'>
          <a href='/home'>
            <Button style={{ backgroundColor: '#FF9A8D' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </a>
        </div>
      </div>
      <div className='les_deux'>
        <div className='donnee_container'>
          <Col>
            <div className='part1'>
              <div className='info'>
                <h5>Type : <span>{biendata?.type_biens} | </span></h5>
              </div>
              <div className='info'>
                <h5>Disponibilité : <span>{biendata?.disponibilté} | </span></h5>
              </div>
              <div className='info'>
                <h5>Catégorie : <span>{biendata?.categorie}</span></h5>
              </div>
            </div>
            <div className='part2'>
              <h5>Description :</h5>
              <div>{biendata?.description}</div>
            </div>
          </Col>
        </div>
        <div className='carousel_container'>
          <Carousel className='visite_img'>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={`http://localhost:8000/${image.src}`} alt={`Image ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='header-div-information'>
        <h4>Information:</h4>
      </div>
      <div className='information'>
        <div className='info'>
          <h6>Ville : <span>{biendata?.ville} | </span></h6>
        </div>
        <div className='info'>
          <h6>Gouvernorat : <span>{!biendata?.gouvernant ? '-' : biendata?.gouvernant} | </span></h6>
        </div>
        <div className='info'>
          <h6>Prix : <span>{!biendata?.prix ? '-' : biendata?.prix} DT | </span></h6>
        </div>
      </div>
      <div className='table-header'>
        <h4> Caractéristique</h4>
      </div>
      <div className='table-contact'>
        <div className='table-container'>
          {table()}
        </div>
        <div className='contact'>
          {biendata && (
            <div >
              <div className='user-prop'>
                <img src='/img/sedkii.jpg' alt="Photo de profil" />
                <h4>{biendata.user_details.name +" "+biendata.user_details.last_name}</h4>
              </div>
              <div className='inputs'>
                <Form.Label htmlFor="name">Nom et Prénom :</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label htmlFor="phone">Téléphone :</Form.Label>
                <Form.Control
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Form.Label htmlFor="email">Email :</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label htmlFor="message">Message :</Form.Label>
                <Form.Control
                  as="textarea"
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Enter Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className='btn'>
                <button  onClick={envoyer}>
                  <FaPaperPlane /> Envoyer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

