import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const closeHandler=()=>{
  props.setModal(0)

  }
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
    </div>
  )
};

export default PhotoDetailsModal;
