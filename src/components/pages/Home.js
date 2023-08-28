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
         My name is Alec and I am new to web development but looking forward to learning all that I can. I am currently freelancing and looking for a full time position. I have a few projects that I am working on and will be adding more as I go of which I am excited to share with you all. Some are very much a work in progress so I always invite feedback. 
         </p>
          <p> In my day to day I am a stay at home dad to a 1.5 year old. I like to game, I used to have a bagel side hustle but hung up the apron and switched it for a career in tech. I can chat anything from toddler stories, to Dark Souls and the best way to knead dough. I hope to hear from you soon!</p>
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
  