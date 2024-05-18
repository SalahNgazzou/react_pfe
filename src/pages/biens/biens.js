import React, { useEffect, useState } from 'react'
import { getBien } from '../../utils/VisiteurUtils/getBien';
import { Button, Card, Carousel } from 'react-bootstrap';
import './biens.css'
import { Navbars } from '../../components/header/header';
export const Biens=()=> {
    const [data,setData]=useState([]);

    useEffect(() => {
        getBien({ setData, url: "visiteur/random" });
      }, []);
  return (
    <div>
        <Navbars />
    <div className='cards_bien'>
               {data ? (
                   data.map((item, index) => (
                       <Card key={index} style={{ width: '18rem' }}>
                           <Carousel className='cards_carousel_bien'>
                               {item.liste_images ? (
                                   item.liste_images.map((image, i) => (
                                       <Carousel.Item key={i}>
                                           <img src={`http://localhost:8000/${image.src}`} alt={`Image ${i}`} />
                                       </Carousel.Item>
                                   ))
                               ) : null}
                           </Carousel>
                           <Card.Body>
                               <Card.Title>{item.type_biens}</Card.Title>
                               <Card.Text>Catégorie : {item.categorie}</Card.Text>
                               <Card.Text>Prix : {item.prix} (DT)</Card.Text>
                               <Card.Text>Addresse : {item.ville + " , " + item.gouvernant}</Card.Text>
                               <a href={`/visite/${item.id}`}>
                                   <Button >Visite</Button>
                               </a>
   
                           </Card.Body>
                       </Card>
                   ))
               ) : (
                   <p>Loading...</p>
               )}
                
           </div>
           </div>
  )
}
