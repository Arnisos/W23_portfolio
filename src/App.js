import React from 'react';
import Resume from './Resume';
import CoverLetter from './CoverLetter';
import Experience from './Experience';
import "./Experience.css"
import "./Resume.css";
import "./CoverLetter.css"
import Capstone from './Capstone';
import "./Capstone.css"
import "./image.jpg"


function App() {
  
  return (
    <div className="app">
      <Resume />
      <CoverLetter />
      <Experience />
      <Capstone />
    </div>
  )
}

export default App;
