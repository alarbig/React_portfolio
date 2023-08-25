import React from "react";
import '../assets/portfolio.css';
import headshot from '../assets/headpic.jpg'

function About() {
    return (
      <body>      
      <h1 id='h1Tag'>Hello!</h1>
  <main>
      <div class="aboutMe">
      <p>A little about me!</p>
      <p>Before I moved into Web development, I worked in IT for a few years. Doing help-desk and security focused work. And before that I was a baker! I ran a small bagel company in Fort Collins, CO. I did that for four years before moving into IT. I currently live in the Northern Colorado area with my Wife and 15 month old son. </p> 
      <p>In my free time I like watching horror movies and spending time with my family! I also love game development and have started getting into map layouts and design. </p>
      <hr></hr>
      <img id='img-friends' src={headshot} alt='Picture of Alec'></img>
      </div>
  </main>
  <footer>
  <p>A subsidiary of Biglar Bagels</p>
</footer>  
</body>
    )
}

export default About;