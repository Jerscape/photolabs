import React, {useState} from 'react';

//

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';

console.log("photos", photos)
console.log("photos element 1", photos[1])
console.log("similar photos", photos[1].similar_photos)



// Note: Rendering a single component to build components in isolation
const App = () => {
  //any number besides 0 ie an id number will make modal === true
  const [modal, setModal] = useState(0)
  //define modal state here 
    return(
    <>
      <HomeRoute
        modal={modal}
        setModal={setModal}
      />
      {modal && <PhotoDetailsModal 
         photos={photos}
         modal={modal}
         setModal={setModal}
      />}

    </>
    )
 




};

export default App;

  // const photoItems = photos.map((photo)=> {
  //   return(
  //     //would I just return photoitem 

  //     <PhotoList
  //     //when I try and remove this is errors
  //     key={photo.id}
  //     id={photo.id}
  //     favouritedList={favouritedList}
  //     setFavouritedList={setFavouritedList}
  //     ></PhotoList>

      // <PhotoListItem 
      // //when I try and delete key I get a massive error 
      // key={photo.id}
      // id={photo.id}
      // // imageSource={photo.imageSource}
      // // profile={photo.profile}
      // // username={photo.username}
      // // city={photo.location['city']}
      // // country={photo.location['country']}
      // photoList={sampleDataForPhotoList}
      // favouritedList={favouritedList}
      // setFavouritedList={setFavouritedList}
      
      // />
  //   )
  // }) 

  // return(
  //   <div className='App'>
  //     {photoItems}
  //   </div>
  // )

  // return (
  //   <div className="App">

  //     <PhotoListItem 
  //     photoID={sampleDataForPhotoListItem.id}
  //     imageSource={sampleDataForPhotoListItem.imageSource}
  //     profile={sampleDataForPhotoListItem.profile}
  //     username={sampleDataForPhotoListItem.username}
  //     city={sampleDataForPhotoListItem.location['city']}
  //     country={sampleDataForPhotoListItem.location['country']}
      
  //     />
  //   </div>
  // );
