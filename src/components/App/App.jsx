import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

let [gallery, setGallery] = useState([]);


// GETting objects in gallery
const fetchGallery = () => {
  axios({
    method: "GET",
    url: '/list'
  }).then(response => {
    console.log('GET response', response);
    setGallery(response);
  }).catch(error => {
    console.log('Error in GET', error);
  });
};//End GET

//PUT for like
const putGallery = () => {
  axios({
    method: 'PUT',
    url: `/like/${gallery.id}`
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
        putGallery={putGallery}/>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
