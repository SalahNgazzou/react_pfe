import React, { useState } from 'react'
import './hero.css'
import { FaSearch } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import { postData } from '../../utils/postData';
import { getData } from '../../utils/getData';
// Importez votre image de fond


export const Hero = () => {
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
  const categories = [{ key: "A vendre", value: "A vendre" }, { key: "A louer", value: "A louer" }];


  const [showAdvanced, setShowAdvanced] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState('');
  const [gouvernant, setGouvernant] = useState('');
  const [categorie, setCategorie] = useState('');
  const [prixMin, setPrixMin] = useState('');
  const [prixMax, setPrixMax] = useState('');

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);

  }
  const searchData = () => {
    let item = { type, gouvernant, categorie, prixMin, prixMax }
    getData({ setData, url: "visiteur", data: item })
    console.log(data)
  }

  return (
    <div>
      <section className='hero' >
        <div className='hero-container'>
          <div className='text'>
            <h1>Search Your Next Home</h1>
            <p>Find new & featured property located in your local city.</p>
          </div>
          <form className='form-flex'>
            <div className='box'>
              <Form.Label>Type</Form.Label>
              <Form.Select value={type}
                onChange={(e) => setType(e.target.value)}>
                <option disabled value="">Villa</option>
                {types.map(type => <option key={type.key} value={type.value}>{type.key}</option>)}
              </Form.Select>

            </div>
            <div className='box'>
              <Form.Label>Gouvernorat</Form.Label>
              <Form.Select value={gouvernant}
                onChange={(e) => setGouvernant(e.target.value)}>
                <option disabled value="">Sousse </option>
                {gouvernorats.map(gouvernorat => <option key={gouvernorat.key} value={gouvernorat.value}>{gouvernorat.key}</option>)}
              </Form.Select>
            </div>
            <div className='box'>
              <Form.Label>Categorie</Form.Label>
              <Form.Select name="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                <option disabled value="">A vendre/ A louée </option>
                {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.key}</option>)}
              </Form.Select>
            </div>
            <div className='box'>
              <Form.Label>Prix Mininmum :</Form.Label>
              <Form.Control
                type="number"
                name="prix_min"
                value={prixMin}
                onChange={(e) => setPrixMin(e.target.value)}
              />
            </div>
            <div className='box'>
              <Form.Label>Prix Maximum:</Form.Label>
              <Form.Control
                type="number"
                name="prix_max"
                value={prixMax}
                onChange={(e) => setPrixMax(e.target.value)}
              />
            </div>
            <div className='box'>
              <h4 onClick={toggleAdvanced}>Advance Filter</h4>
            </div>
            <button className='btn1' onClick={searchData}>
              <FaSearch />
            </button>

          </form>
          {showAdvanced && (
            <form className='form'>
              <div className='box'>
                <Form.Label>Nombre de chombre :</Form.Label>
                <Form.Control
                  type="number"
                  name="nbr_chombre"
                />
              </div>
              <div className='box'>
                <Form.Label>Nombre de salle de bain :</Form.Label>
                <Form.Control
                  type="number"
                  name="nbr_salle_bain"
                />
              </div>
              <div className='box'>
                <Form.Label>Surface (m²):</Form.Label>
                <Form.Control
                  type="number"
                  name="surface"
                />
              </div>
            </form>
          )}
        </div>


      </section>
    </div>
  )
}

