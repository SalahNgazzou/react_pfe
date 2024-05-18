import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './cards.css';

export const Cards = ({data}) => {
    return (
        
 <div className='cards'>
            {data ? (
                data.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Carousel className='cards_carousel'>
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
                                <button >Visite</button>
                            </a>

                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>Loading...</p>
            )}
             
        </div>
       
       
    );
};
