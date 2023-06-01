import React from 'react';
import '../../styles/Header.css';
import headshot from '../assets/headpic.jpg'
import workdayPlanner from '../assets/workdayplanner.png'
import Password from '../assets/Password generator.png'
  function Home() { 
    return (
      <body>
      <h1 class='box'>Hello!</h1>
      <main>
        <div class="box">
        My name is Alec! I a new to web development but looking forward to learning all that I can! I have some links to a few of my projects that I have worked on as well as my Github with more of my work completed there. Below I have a few videos of projects that I have completed. 
        <hr></hr>
        <img id="img" src={headshot} alt="head-shot"></img>
        <div class = "box3">
        <p>These are a few demos of some projects. The first one is a README generator where you can answer a few questions and it will automatically produce a readme file for you! 
        <a href="https://github.com/alarbig/README-Generator"> ReadMe Generator</a>
        </p>
        </div>
        <div class = "box3">
          <iframe class="demo"  src="https://www.youtube.com/embed/kEgVUrdrewQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class = "box3">
          <p>This second one was an employee generator that will automatically create new employees and generate an HTML page with their information, and manager. You answer some questions about the employee and it will make it automatically for you.
          <a href="https://github.com/alarbig/HTML-employee-generator"> Employee Generator</a>
          </p>
          </div>
          <div class = "box3">
          <iframe class="demo" width="560" height="315" src="https://www.youtube.com/embed/NIAr9hsnWFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> 
          <div class = "box3">
          <p>This is a work-day planner that will display information entered as past, present, future, colors to indicate what event is happening and if it has already past or will be occurring.</p>
          </div>
          <div class = "box3">
        <a href="https://github.com/alarbig/Workaday-Planner"><img id="img2"src={workdayPlanner} alt="Workday planner screenshot"></img></a>  
       </div>
       <div class = "box3">
        <p>With this password generator you can quickly create a strong password with just a few clicks! This was a really fun project to work and a great intro to JavaScript.</p>
        </div>
        <div class = "box3">
        <a href="https://github.com/alarbig/password-maker"><img id="img2"src={Password} alt="Password screenshot"></img></a> 
        </div>
      </div>
    </main>  
    <div> 
    </div>
</body>

    )
  }
  
  export default Home;
  