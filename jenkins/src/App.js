
import './App.css';
import React from 'react';
import Navbar from "./Components/nav";
import Images from "./Components/img";
import Example from './Components/slider';
import Iframes from './iframe';
import Containers from './Components/belowSlider';


import Footer from './Components/footer';





function App() {
  return (
    <div className="App">
   <Navbar/>
   <Images/>
   <Example/>
   
   <Iframes/>

   <Containers/>
   
   

    </div>
  );
}

export default App;
