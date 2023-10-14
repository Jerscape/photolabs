import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const closeHandler=()=>{
  props.setModal(0)

  }

  //note, because they are stored in an array, photo 1 is element 0
  //hense photoID 1 - 1 = 0 in order to access it
  const photoID = props.modal -1
  console.log(photoID)
  // //id is being received as per the first consolde log  
  // console.log("modal value: ", props.modal)
  // //this is console logging out the photo object
  // console.log("photo from modal:", props.photos[props.modal])
  // const {location, urls, similarPhotos} = props.photos[props.modal]
  // console.log("location:", location)
  // console.log('urls: ', urls)
  // // console.log("similar photos: ", photoID.similar_Photos)
  // console.log("similar photos? :", props.photos[0].similar_photos)
  
  //this is a object of objects
  const similarPhotos = props.photos[photoID].similar_photos
  console.log(`similarphotos by id: ${photoID}`, similarPhotos)

  

  return (
   
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" 
        onClick={()=>{
          closeHandler()
          
        }}
        //insert on click
        />
      </button>
      {/* add the data here from the photo */}
      {/* <PhotoList

      /> */}
    </div>
  )
};

export default PhotoDetailsModal;
