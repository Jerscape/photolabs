import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton'
import useApplicationData from 'hooks/useApplicationData';


const PhotoDetailsModal = (props) => {

  
  //const {modal, setModal, closeHandler, toggleHandler, clickFavoritePhoto, photoIsFavorited, setPhotoIsFavourited} = props;


  const photoID = props.modal;
  console.log(props.modal)
  //this is a object of objects
  const similarPhotos = props.photo.similar_photos;
  // const similarPhotos = props.photos[photoID].similar_photos;
  //const similarPhotosList = Object.values(similarPhotos);
 const updatedSimilarPhotos = similarPhotos.map((item) => item.similar_photos = similarPhotos)

  //console.log("PHOTOD_DETAIL_MODAL UPDATE Similar photos:", updatedSimilarPhotos)
  console.log("PHOTOD_DETAIL_MODAL UPDATE Similar photos:", similarPhotos)




  const modalPhoto = props.photo;
  const modalPhotoImgSource = modalPhoto.urls.regular;

  const { location, user } = modalPhoto;
  const modalPhotoCity = location.city;
  const modalPhotoCountry = location.country;
  const modalPhotoName = user.name;
  const modalPhotoUserName = user.username;
  const modalPhotoProfile = user.profile;
  
  console.log("modal details", props.modal) //this is displaying the element id, not the photo id, modal is being seat wrong
  //(console.log("MODAL PHOTO ID: ", props.photoID))
  return (

    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"
          onClick={() => {
            console.log("close button clicked")
            props.closeHandler();

          }}
        //insert on click
        />
      </button>
      <div className={'photo-details-modal__images'}>
        <PhotoFavButton
           id={photoID}
           favouritedList={props.favouritedList}
           setFavouritedList={props.setFavoritedList}
           photoIsFavourited={props.photoIsFavorited}
           setPhotoIsFavourited={props.setPhotoIsFavourited}
           clickFavoritePhoto={props.clickFavoritePhoto}
        />
       
        <img src={modalPhotoImgSource} className={'photo-details-modal__image'} />
        <div className={'photo-details-modal__photographer-details'}>

          <img src={modalPhotoProfile} className={'photo-details-modal__photographer-profile'} />
          <div className={'photo-details-modal__photographer-info'}>
            {modalPhotoUserName}
            <div className={'photo-details-modal_photographer-location'}>
              {modalPhotoCity}, {modalPhotoCountry}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">
          <span>Similar Photos</span>

        </div>

        <div className={'photo-details-modal__images'}>
          <PhotoList
            favouritedList={props.favouritedList}
            setFavouritedList={props.setFavouritedList}
            setModal={props.setModal}
            modal={props.modal}
            photos={similarPhotos}
            photoIsFavorited={props.photoIsFavorited}
            // setPhotoIsFavourited={props.setPhotoIsFavourited}

            clickFavoritePhoto={props.clickFavoritePhoto}
            toggleHandler={props.toggleHandler}
          />

        </div>
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
