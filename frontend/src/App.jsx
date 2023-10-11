import React, {useState} from 'react';

//

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Davey Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Winnipeg",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Heather Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  }
]


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favouritedList, setFavouritedList] = useState([])
  const photoItems = photos.map((photo)=> {
    return(
      //would I just return photoitem 
      <PhotoListItem 
      key={photo.id}
      id={photo.id}
      imageSource={photo.imageSource}
      profile={photo.profile}
      username={photo.username}
      city={photo.location['city']}
      country={photo.location['country']}
      favouritedList={favouritedList}
      setFavouritedList={setFavouritedList}
      
      />
    )
  }) 

  return(
    <div className='App'>
      {photoItems}
    </div>
  )

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
};

export default App;
