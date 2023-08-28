import React from 'react';
import '../assets/portfolio.css';
import allMyFriendsImage from '../assets/allmyfriends.jpg';

  function Home() { 
    return (
      <body id='body'>
        <h1 id='h1Tag'>Hello!</h1>
      <main>
        <div className="aboutMe">
          <p>
          My name is Alec. I am new to web development but looking forward to learning all that I can! I am currently freelancing and looking for a full time position. I have a few projects that I have worked on and will be adding more as I go. I am currently working on a few things that I am excited to share with you all. And some that are very much a work in progress.
          </p>
          <hr></hr>
          <img id='img' src={allMyFriendsImage} alt='ghosts in the air'></img>
        </div>
      </main>
      <footer>
        <p>A subsidiary of Biglar Bagels</p>
        </footer>
     </body>
    )
  }
  
  export default Home;
  