import React, { useEffect, useState } from 'react'
import { Hero } from '../components/hero/hero'
import { Cards } from '../components/card/cards'
import { searchData } from '../utils/VisiteurUtils/searchData';
import { Examplair } from '../utils/exmplair';
import { Navbars } from '../components/header/header';

export const Home = () => {

  const [type_biens, setType] = useState('');
  const [gouvernant, setGouvernant] = useState('');
  const [categorie, setCategorie] = useState('');
  const [prix_min, setPrixMin] = useState('');
  const [prix_max, setPrixMax] = useState('');
  const [data, setData] = useState([]);

  const searchBien = () => {
    let item = { type_biens, gouvernant, categorie, prix_min, prix_max }
    console.log(item)
    searchData({ setData, url: "visiteur", items: item })
    console.log(data)
  }
  useEffect(() => {
    Examplair({ setData, url: "visiteur/random" });
  }, []);
  return (
    <div>
      <Navbars />
      <Hero searchData={searchBien} type={type_biens} gouvernant={gouvernant} categorie={categorie} prixMin={prix_min} prixMax={prix_max} setType={setType} setGouvernant={setGouvernant} setCategorie={setCategorie} setPrixMin={setPrixMin} setPrixMax={setPrixMax} />
      <Cards data={data} />
    </div>
  )
}

