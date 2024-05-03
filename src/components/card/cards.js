import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import './cards.css'
import { Examplair } from '../../utils/exmplair';
import { VisiteBien } from '../../pages/visitebien/vistie';

export const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Examplair({ setData, url: "visiteur/random" });
    }, []);

    return (
        <div>
 <div className='cards'>
            {data ? (
                data.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Carousel>
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
       
    );
};
