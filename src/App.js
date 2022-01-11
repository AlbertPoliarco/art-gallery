import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar'

function App() {
  // State variables here...
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])


  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar />
      const handleIterate = (e) => {
        setArtId(artId + Number(e.target.value)) 
      }
      
    </div>
    
  );
  
}

export default App;
