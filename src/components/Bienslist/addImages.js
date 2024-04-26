import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { postBien} from '../../utils/postData'
export const Images = ({ showModal, handleClose, biendata }) => {
    console.log(biendata);
    const [image, setImage] = useState([]);
   

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImage(files);
    };


    const handleSave = () => {
        const formData = new FormData();
       
        for (const file of image) {
            formData.append("image[]", file);
        }
        formData.append('id_bien', biendata);

        postBien({ url: "biens/add", data: formData })
        handleClose();
    };
    return (
        <div><Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Form>
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
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <CloudUploadIcon />
                                </IconButton>
                                <span>Upload Images</span>
                            </label>
                        </div>
                        <Button variant="primary" onClick={handleSave}>
                            Save
                        </Button>
                    </Form>
                </div>
            </Modal.Body>
        </Modal></div>
    )
}

