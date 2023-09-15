import React from "react";
import '/Users/stacymccarrell/Desktop/WebDevProjects/portfolio-website/portfolio-website/src/css/Projects.css';

function Projects() {
    return (
        <div className="all-projects-main-container">
            <h1 className="projects-header1">All Projects</h1>
            <div className="project-grid">
                <a className="project-grid-a-tag flappy-bird" href="https://github.com/CloverCodes7062/flappy-bird-ai" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/flappybird-ai.png" 
                            alt="Flappy Bird img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Flappy Bird with AI</h3>
                            <p className='project-grid-desc project-desc'>Flappy Bird Clone. Created with Python using Pygame. Integrated NEAT AI into the game for autonomous play using neat-python.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://github.com/CloverCodes7062/pong-remake" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/pong-screenshot.png" 
                            alt="Pong Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Pong Remake</h3>
                            <p className='project-grid-desc project-desc'>Simple Two Player Pong Remake, coded with Python in Pygame. Player 1 controls with WASD, Player 2 controls with ARROW KEYS. Automatically tracks the score for the players.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://github.com/CloverCodes7062/infinite-running-ai" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/infinite-running-ai.png" 
                            alt="Running AI"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Infinite Running AI</h3>
                            <p className='project-grid-desc project-desc'>Infinite Runnning Game where the player jumps over an obstacle. Built in Python using Pygame, integrated NEAT AI into the game for autonomous play using neat-python.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://github.com/CloverCodes7062/expense-tracker" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/expenses-tracker-img.png" 
                            alt="Pong Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Expenses Tracker</h3>
                            <p className='project-grid-desc project-desc'>Expenses Tracking Web App, built in Vite-React using JavaScript, JSX, HTML and CSS. Users can signup/login and save expenses to a database. Logging in retrieves data from a MySQL database hosted on Mircosoft Azure.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://keen-bonbon-73022c.netlify.app/" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/resume-maker.png" 
                            alt="Pong Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Resume Builder</h3>
                            <p className='project-grid-desc project-desc'>Simple resume building web app. Built ing Vite-React using JavaScript, JSX, HTML, CSS, Bootstrap, and Font-Awesome Styles. Users can add/remove anyting on the template.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://spiffy-starburst-3b84ed.netlify.app/" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src="src/jsx/random-quote-gen.png" 
                            alt="Pong Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Random Quote Generator</h3>
                            <p className='project-grid-desc project-desc'>A Random Quote Generator. Built using jQuery, JavaScript, HTMl and CSS. Users can click and "next quote" button to get another quote, with the background color having a chance to change on every click.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Projects;
