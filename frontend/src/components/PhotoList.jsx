import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

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

const PhotoList = (props) => {

  //const [urls, user] = sampleDataForPhotoList

  const photoItems = sampleDataForPhotoList.map((item) =>{

    const [urls, user] = sampleDataForPhotoList
    console.log("PHOTOLIST PROPS:", props)
    return(
      <li key={item.id}>
      <PhotoListItem
      key={item.id}
      id={item.id}
      favouriteList={props.favouritedList}
      setFavouritedList={props.setFavouritedList}
     
      imageSource={item.urls.regular}

      username={item.user.username}
      name={item.user.name}
      profile={item.user.profile}

      city={item.location.city}
      country={item.location.country}
      
      />
      </li>


    )
  })

  return (
    <ul className="photo-list">

    {photoItems}
    </ul>
  );
};

export default PhotoList;
