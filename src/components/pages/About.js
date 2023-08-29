import React from "react";
import '../assets/portfolio.css';
import headshot from '../assets/headpic.jpg'

function About() {
    return (
      <body>      
  <h1 id="h1Tag">A little about me...</h1>
  <main>
    <div class="aboutMe">
      <p>Before moving into web development, I worked in IT for a few years. Doing help-desk and security focused work and before that I was a baker. I ran a small bagel company in Fort Collins, CO for four years. I currently live in the Northern Colorado area with my wife and young son.</p>

      <p>In my free time, I like watching horror movies and spending time with my family. I also love game development and have started getting into map layouts and design.</p>
      <hr></hr>
      <div class="center-content">
        <img id="img-friends" src={headshot} alt="Picture of Alec"></img>
        <ul>agrlarbig@gmail.com</ul>
        <ul>619-623-4591</ul>
        <ul>Github: @alarbig</ul>
      </div>
    </div>
  </main>  
</body>
    )
}

export default About;