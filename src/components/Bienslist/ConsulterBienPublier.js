import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { Images } from '../Bienslist/addImages'
import { Edit_biens } from '../Bienslist/Edit'
import { ImagesDisplay } from '../Bienslist/ImagesDispaly'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './consulter.css';
import { getData } from '../../utils/getData';


export const ConsulteBienPublier = ({ user }) => {

  const { id } = useParams();
  const [biendata, setBienData] = useState(null);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelet, setShowModalDelet] = useState(false);


  useEffect(() => {
    getData({ setData: setBienData, url: "biens/" + id });
  }, [id]);

  useEffect(() => {
    if (biendata && biendata.images) {
      setImages(biendata.images);
    }
  }, [biendata]);

  const handleShowEdit = () => setShowModalEdit(true);
  const handleCloseEdit = () => setShowModalEdit(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleShowDelet = () => setShowModalDelet(true);
  const handleCloseDelet = () => setShowModalDelet(false);
  const table = () => {
    switch (biendata?.type_biens) {
      case 'Villa':
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
                  <td>Jardin</td>
                  <td>{biendata?.jardin}</td>

                </tr>
                <tr>
                  <td>Piscin</td>
                  <td>{biendata?.piscin}</td>

                </tr>
                <tr>
                  <td>Garage</td>
                  <td>{biendata?.garage}</td>

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
          <a href='/PublierPage'>
            <Button style={{ backgroundColor: '#FF9A8D' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </a>
        </div>
        <div className='button'>
          <Button onClick={handleShow} style={{ backgroundColor: '#FF9A8D' }}>
            <FontAwesomeIcon icon={faPlus} /> Add Images
          </Button>

          <Button onClick={handleShowDelet} style={{ backgroundColor: '#FF9A8D' }}>
            <FontAwesomeIcon icon={faTrash} /> Delete Images
          </Button>
        </div>

      </div>

      <div className='consulte_img' >
        <Carousel >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={`http://localhost:8000/${image.src}`} alt={`Image ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <div className='header-div-information'>
          <h5>Information : </h5>
        </div>
        <div className='information'>
          <div className='info'>
            <h6>Addresse : <span>{biendata?.addresse} | </span></h6>
          </div>
          <div className='info'>
            <h6>Ville : <span>{biendata?.ville} | </span></h6>
          </div>
          <div className='info'>
            <h6>Gouvernorat : <span>{biendata?.gouvernant} | </span></h6>
          </div>
          <div className='info'>
            <h6>Prix : <span>{!biendata?.prix ? '-' : biendata?.prix} DT | </span></h6>
          </div>
          <div className='info'>
            <h6>Propriétaire : <span>{!biendata?.propritair_name ? '-' : biendata?.propritair_name} | </span></h6>
          </div>
          <div className='info'>
            <h6>Téléphone : <span>{!biendata?.proritaire_phone ? '-' : biendata?.proritaire_phone}</span></h6>
          </div>
        </div>

      </div>

      <div className='talble-header'>
        <h4> Caractéristique</h4>
      </div>
      <div className='conatiner2'>
        <div className='type_container'>

          <div className='partie1'>
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
          <div className='description'>
            <h5>Description :</h5>
            <div>{biendata?.description}</div>
          </div>

        </div>
        <div className='table-containre'>
          {table()}
        </div>
      </div>

      <div className='footer'>
        <div className='buttom_button'>
          <Button onClick={handleShowEdit} style={{ backgroundColor: '#FF9A8D' }} >
            <FontAwesomeIcon icon={faEdit} /><span>Edit</span> 
          </Button>
            
          </div>
      
      </div>
      <Images showModal={showModal} handleClose={handleClose} biendata={biendata && biendata.id} />
      <Edit_biens showModalEdit={showModalEdit} handleCloseEdit={handleCloseEdit} biendata={biendata && biendata.id} />
      {biendata?.images.length > 0 && <ImagesDisplay images={biendata?.images}
        showModalDelet={showModalDelet} handleCloseDelet={handleCloseDelet}
      />
      }
    </div>
  );
}

