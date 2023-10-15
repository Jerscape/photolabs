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
  // const photoID = props.modal
  // const modalPhoto = props.photos[props.modal]
  // console.log("element from photo details:", photoID);
  const photoID = props.modal
  //this is a object of objects
  const similarPhotos = props.photos[photoID].similar_photos;
  console.log(`similarphotos by id: ${photoID}`, similarPhotos);
  //convert similarPhotos to an array? pass as prop to photo list...
  //refactor photo list to accept a prop (currently directly accepting photos via import)
  const similarPhotosList = Object.values(similarPhotos);
  //console.log("similar photos as value of photos: ", photos)


 
  const modalPhoto = props.photos[props.modal]
  // console.log("element from photo details:", photoID);
  // console.log("modal Photo", modalPhoto)
  const modalPhotoImgSource = modalPhoto.urls.regular
//  console.log("modalPhotoImgSource", modalPhotoImgSource)




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
        //the photo item id is set by the modal state
        //think of how to pass the SPECIFIC photo info to this component here
        id={props.modal}
        imageSource={modalPhotoImgSource}
        favouritedList={props.favouritedList}
        setFavouritedList={props.setFavouritedList}


      />
      {/* add the data here from the photo */}
      {/* <PhotoList
        //id={props.modal}
        setModal={props.setModal}
        photos={similarPhotosList}
      /> */}
    </div>
  );
};

export default PhotoDetailsModal;
