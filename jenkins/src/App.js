
import './App.css';
import React from 'react';
import Navbar from "./Components/nav";
import Images from "./Components/img";
import ControlledCarousel from './Components/Caresoul';
import Example from './Components/slider';
import Iframes from './iframe';
import Containers from './Components/belowSlider';


import {render} from 'react-dom';





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
