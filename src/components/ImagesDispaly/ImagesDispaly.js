import React from 'react';
import './ImagesDispaly.css'; // Import the CSS file
import { backApi } from '../../constant';

export const ImagesDispaly = ({images, setImages, setDeletedImages}) => {

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) =>
      prev.push(files)
    )
  }
  console.log(images);
  return (
    <div className="imagesDispaly">
      <div className="imagesContainer">
      {images && images?.map((image) =>
     <div className='image'>
     <span className='delete' onClick={()=>setDeletedImages(image?.id)}>X</span>
    <img className='img' src={backApi+image?.src} /></div>
      )}</div>
      {/* <input
        type="file"
        className='inputFile'
        name="images"
        onChange={handleImageChange}
        multiple
      /> */}
    </div>
  );
};


