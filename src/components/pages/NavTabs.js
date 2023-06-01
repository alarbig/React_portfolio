import React from 'react';
import '../../styles/Header.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navigation">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://github.com/alarbig" class="link-tag" target="_blank"
        >
          Github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://jcg0.github.io/project-1-recipesy/" class="link-tag" target="_blank"
        >
          Recipesy
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://baby-journal.herokuapp.com/login" class="link-tag" target="_blank"
        >
          Baby Journal
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://kill-all-tires.herokuapp.com/" class="link-tag" target="_blank"
        >
          Kill All Tires
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
