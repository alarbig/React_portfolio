import React from 'react';
import '../assets/portfolio.css';
import workDayPlanner from '../assets/workdayplanner.png'
import passwordMaker from '../assets/Password generator.png'
function Projects () {
    return (
        <body id="project-body">
        <hr></hr>
        <p class="project-box">These are a few demos of some projects. The first one is a README generator where you can answer a few questions and it will automatically produce a readme file for you! </p>
          <iframe class="demo" width="560" height="315" src="https://www.youtube.com/embed/kEgVUrdrewQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <hr></hr>

          <p class="project-box">This second one was an employee generator that will automatically create new employees and generate an HTML page with their information, and manager. You answer some questions about the employee and it will make it automatically for you.</p>

          <iframe class="demo" width="560" height="315" src="https://www.youtube.com/embed/NIAr9hsnWFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <hr></hr>

          <p class="project-box">This was a work-day planner that will display information entered as past, present, future, colors to indicate what event is happening and if it has already past or will be occurring.</p>

        <a href="https://github.com/alarbig/Workaday-Planner"><img id='img2' src={workDayPlanner} alt='Screenshot of workday planner'></img></a>

        <hr></hr>

        <p className='project-box'>
            When I first started taking JavaScript classes this was one of our first projects. It was a password generator that would generate a random password based on the criteria that you selected. It was a fun project and I learned a lot about how to use JavaScript to generate random numbers and how to use prompts and alerts to get user input.
        </p>
        <a href="https://github.com/alarbig/password-maker"><img id='img2' alt='Password maker screenshot'src={passwordMaker}></img></a>
</body>
    )
}

export default Projects;