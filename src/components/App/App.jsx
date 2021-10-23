import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

useEffect(() => {
  fetchGallery()
}, [])

let [gallery, setGallery] = useState([]);


// GETting objects in gallery
const fetchGallery = () => {
  axios({
    method: "GET",
    url: '/gallery'
  }).then(response => {
    console.log('GET response', response);
    setGallery(response.data);
  }).catch(error => {
    console.log('Error in GET', error);
  });
};//End GET

//PUT for like
const addLike = (gallery) => {
  axios({
    method: 'PUT',
    url: `/gallery/like/${gallery.id}`
  }).then(response => {
    console.log('in PUT', response);
    fetchGallery();
  }).catch(error => {
    console.log('Error in PUT', error);
  });
};//End PUT for like



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        gallery={gallery}
        addLike={addLike}/>
      </div>
    );
}

export default App;
