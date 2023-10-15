import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {
  const closeHandler = () => {
    props.setModal(0);

  };

  //note, because they are stored in an array, photo 1 is element 0
  //hense photoID 1 - 1 = 0 in order to access it
  const photoID = props.modal - 1;
  console.log(photoID);
  
  //this is a object of objects
  const similarPhotos = props.photos[photoID].similar_photos;
  console.log(`similarphotos by id: ${photoID}`, similarPhotos);
  //convert similarPhotos to an array? pass as prop to photo list...
  //refactor photo list to accept a prop (currently directly accepting photos via import)
  const photos = Object.values(similarPhotos);
  console.log("similar photos as value of photos: ", photos)
  return (

    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"
          onClick={() => {
            closeHandler();

          }}
        //insert on click
        />
      </button>
      <PhotoListItem
        //id={props.modal}
        imageSource={props.photos.imageSource}
        favouritedList={props.favouritedList}
        setFavouritedList={props.setFavouritedList}
      />
      {/* add the data here from the photo */}
      {/* <PhotoList
        //id={props.modal}
        setModal={props.setModal}
        photos={photos}
      /> */}
    </div>
  );
};

export default PhotoDetailsModal;
