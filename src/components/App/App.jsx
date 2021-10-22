import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

let [gallery, setGallery] = useState([]);


// GETting objects in gallery
const fetchGallery = () => {
  axios({
    method: "GET",
    url: '/list'
  }).then(response => {
    console.log('GET response', response);
    setGallery(response.data);
  }).catch(error => {
    console.log('Error in GET', error);
  });
};





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
