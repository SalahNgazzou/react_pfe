import React, { useState } from 'react';
import './ImagesDispaly.css'; // Import the CSS file
import { backApi } from '../../constant';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteData } from '../../utils/deleteData';
import { FaTrash } from 'react-icons/fa';

export const ImagesDisplay = ({ images, showModalDelet, handleCloseDelet }) => {
  const [deletedImages, setDeletedImages] = useState([]);
  const [imagestate, setImageState] = useState(images);

  const handleDeleteImage = (imageId) => {
    // Supprimer l'image de l'état local
    const deletedImageId = imagestate.find(image => image.id === imageId).id;
    const updatedImages = imagestate.filter(image => image.id !== imageId);
    // Ajouter l'ID de l'image supprimée au tableau deletedImages
    setDeletedImages(prevDeletedImages => [...prevDeletedImages, deletedImageId]);
    setImageState(updatedImages);
  };
  const deleteImages = async () => {

     const formData = new FormData();
      formData.append("ids", JSON.stringify(deletedImages)); // Assurez-vous d'envoyer les IDs sous forme de chaîne JSON

      // Envoyer la requête DELETE au backend
       deleteData({ url: "biens/"+ JSON.stringify(deletedImages), data: {} });
     
    handleCloseDelet();
  }
  return (
    <Modal show={showModalDelet == true} onHide={handleCloseDelet} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Delete Images </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="imagesDispaly">
            <div className="imagesContainer">
              {imagestate && imagestate?.map((img) =>
                <div className='image'>
                  <span className='delete' onClick={() => handleDeleteImage(img?.id)}>X</span>
                  <img className='img' src={backApi + img?.src} /></div>
              )}</div>
            
          </div>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: '#ff9a8f', color: '#4A536B', border: 'none' }} onClick={deleteImages}>
          <FaTrash/><span>Delete</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


