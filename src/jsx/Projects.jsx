import React from 'react';
import '../css/Projects.css';
import flappyBirdImg from '../assets/flappybird-ai.png';
import expensesTrackerImg from '../assets/expenses-tracker-img.png';
import infiniteRunningAIImg from '../assets/infinite-running-ai.png';
import pongImg from '../assets/pong-screenshot.png';
import resumeBuilderImg from '../assets/resume-maker.png';
import randomQuoteGenImg from '../assets/random-quote-gen.png';
import weatherAppImg from '../assets/weather-app.png';

function Projects() {
    return (
        <div className="all-projects-main-container">
            <h1 className="projects-header1">All Projects</h1>
            <div className="project-grid">
                <a className="project-grid-a-tag flappy-bird" href="https://github.com/CloverCodes7062/flappy-bird-ai" target="_blank">
                    <div className="project-grid-div project" id="project1">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={flappyBirdImg} 
                            alt="Flappy Bird img"
                            width="75"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Flappy Bird with AI</h3>
                            <p className='project-grid-desc project-desc'>Flappy Bird Clone. Created with Python using Pygame. Integrated NEAT AI into the game for autonomous play using neat-python.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://github.com/CloverCodes7062/pong-remake" target="_blank">
                    <div className="project-grid-div project" id="project2">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={pongImg} 
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
                    <div className="project-grid-div project" id="project3">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={infiniteRunningAIImg}
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
                    <div className="project-grid-div project" id="project4">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={expensesTrackerImg}
                            alt="Expenses TRacker Img"
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
                    <div className="project-grid-div project" id="project5">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={resumeBuilderImg} 
                            alt="Resume Builder Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Resume Builder</h3>
                            <p className='project-grid-desc project-desc'>Simple resume building web app. Built in Vite-React using JavaScript, JSX, HTML, CSS, Bootstrap, and Font-Awesome Styles. Users can add/remove anyting on the template.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag pong" href="https://spiffy-starburst-3b84ed.netlify.app/" target="_blank">
                    <div className="project-grid-div project" id="project6">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={randomQuoteGenImg}
                            alt="Random Quote Gen Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Random Quote Generator</h3>
                            <p className='project-grid-desc project-desc'>A Random Quote Generator. Built using jQuery, JavaScript, HTMl and CSS. Users can click and "next quote" button to get another quote, with the background color having a chance to change on every click.</p>
                        </div>
                    </div>
                </a>
                <a className="project-grid-a-tag weather-app" href="https://github.com/CloverCodes7062/weather-app" target="_blank">
                    <div className="project-grid-div project" id="project7">
                        <img
                            className='resume-builder-img project-grid-img' 
                            src={weatherAppImg}
                            alt="Weather App Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-grid-text project-text'>
                            <h3 className='project-grid-title project-title'>Weather Web App</h3>
                            <p className='project-grid-desc project-desc'>A Wether Web App, that allows users to check the weather. Built using HTML, CSS, JavaScript, NodeJS, jQuery, Bootstrap, and Font-Awesome-Styles. When a user inputs a valid zipcode, an AJAX request is made to a weather api, which returns the temperature in Fahrenheit and the feels like temperature.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Projects;
