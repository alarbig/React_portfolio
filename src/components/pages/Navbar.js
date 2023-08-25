import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../assets/portfolio.css';


function Navbar() {
  return (
    <ul class="navigation">
          <li><a href="./index.html" class="link-tag">Home</a></li>
          <li> <a href="./aboutMe.html" class="link-tag">About Me</a></li>
          <li><a href="https://github.com/alarbig" class="link-tag" target="_blank">Github</a></li>
          <li><a href="./projects.html" class = 'link-tag' target="_blank">Projects</a></li>          
         </ul>  
         
  );
}

export default Navbar;