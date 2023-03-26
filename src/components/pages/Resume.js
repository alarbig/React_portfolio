import React from 'react';
import '../../styles/Header.css';
import resume1 from '../assets/resume1.png'
import resume2 from '../assets/resume2.png'

function Resume() {
  return ( 
    <div id='resume'> 
        <img id="img3" src={resume1} alt="head-shot"></img>
        <img id="img3" src={resume2} alt="head-shot"></img>
        <footer>A subsidiary of Biglar Bagels</footer>
    </div>
    
  )

}

export default Resume;