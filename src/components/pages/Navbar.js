import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../../styles/Header.css';


function Navbar() {
  return (
    <ul class="navigation">
          <li><a href="./index.html" class="link-tag">Home</a></li>
          <li> <a href="./aboutMe.html" class="link-tag">About Me</a></li>
          <li><a href="https://github.com/alarbig" class="link-tag" target="_blank">Github</a></li>
          <li><a href="https://jcg0.github.io/project-1-recipesy/" class="link-tag" target="_blank">Project 1</a></li>
          <li><a href="https://baby-journal.herokuapp.com/login" class="link-tag" target="_blank">Project 2</a></li>
          <li><a href='mailto:agrlarbig@gmail.com' class="link-tag" target="_blank">Contact Me</a></li>
          <li class='link-tag'>Resume</li>
         </ul>
         
  );
}

export default Navbar;