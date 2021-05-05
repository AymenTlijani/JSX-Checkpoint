import React from 'react'
import './App.css';
import imagesrc from "./image-src.png"
import Video from "./studioaymen.mp4"

function App() {
  return (
    <div className="App"  style = {{border:'solid 1px black', maxwidth:'100vw'}}>
     <h1 className="titel red">
     Tlijani Aymen
     </h1>
      <br/>
     <img src={imagesrc} alt='anything'/>
       <br/>
     <img src='/imagepub.jpg' alt='jjj'  width="560" height="315" />
     <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/3WKpiPmwqBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
     <video src ={Video} type="video/mp4" autoPlay={true} width="560" height="315"/ >
    
     </div>
    </div>
  );
}
export default App;