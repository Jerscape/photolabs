import React, {useState} from 'react';

//

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';

// const photos = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Davey Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "3",
//     location: {
//       city: "Winnipeg",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Heather Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   }
// ]

//////
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

///////

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favouritedList, setFavouritedList] = useState([])

 
  return(
    <div className='App'>
      <React.Fragment>
      <TopNavigation
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
      />
      {/* <TopicList/>  */}
      <PhotoList

        //the below variables are for the fav icon functionality
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
      />
      </React.Fragment>
    
    </div>
  )

  //JUSt topic list
  // return(
  //   <div className='App'>
   
  //     <TopicList/> 
    
  //   </div>
  // )

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
