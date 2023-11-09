import React from 'react';
import '../css/Projects.css';
import flappyBirdImg from '../assets/flappybird-ai.png';
import expensesTrackerImg from '../assets/expenses-tracker-img.png';
import infiniteRunningAIImg from '../assets/infinite-running-ai.png';
import pongImg from '../assets/pong-screenshot.png';
import resumeBuilderImg from '../assets/resume-maker.png';
import randomQuoteGenImg from '../assets/random-quote-gen.png';
import weatherAppImg from '../assets/weather-app.png';
import travelExplorerAppImg from '../assets/travel-explorer-app.png';

function Project({projectHref, projectID, imgSrc, imgAlt, imgWidth, imgHeight, title, desc, flappyBirdImgSrc=false}) {
    return (
        <a className="project-grid-a-tag" href={projectHref} target="_blank">
            <div className={`project-grid-div project ${flappyBirdImgSrc ? 'flappy-bird-project-div' : null}`} id={projectID}>
                <img
                    className={`resume-builder-img project-grid-img ${flappyBirdImgSrc ? 'flappy-bird-img' : null}`}
                    src={imgSrc} 
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight}
                />
                <div className='project-grid-text'>
                    <h3 className='project-grid-title project-title'>{title}</h3>
                    <p className='project-grid-desc project-desc'>{desc}</p>
                </div>
            </div>
        </a>
    );
}

function Projects() {
    return (
        <div className="all-projects-main-container">
            <h1 className="projects-header1">All Projects</h1>
            <div className="project-grid">
                <Project 
                    projectHref={"https://github.com/CloverCodes7062/flappy-bird-ai"}
                    flappyBirdImgSrc={true}
                    projectID={"project1"}
                    imgSrc={flappyBirdImg}
                    imgAlt={"Flappy Bird img"}
                    imgWidth={"75"}
                    imgHeight={"100"}
                    title={"Flappy Bird with AI"}
                    desc={"Flappy Bird Clone. Created with Python using Pygame. Integrated NEAT AI into the game for autonomous play using neat-python."}
                />
                <Project
                    projectHref={"https://kaleidoscopic-muffin-0c2208.netlify.app"}
                    projectID={"project2"}
                    imgSrc={travelExplorerAppImg}
                    imgAlt={"Travel Explorer App Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Travel Destination Explorer"}
                    desc={"Built Using Vite-React, Node.js, CSS, Bootstrap, Font Awesome Styles, and several APIs (GoogleMaps, Geocage Geocoding, TripAdivsor). Travel Destination Explorer that displays three countries and infomation about them. Users can input a location to visit a detailed view with more information about it"}
                />
                <Project
                    projectHref={"https://github.com/CloverCodes7062/pong-remake"}
                    projectID={"project3"}
                    imgSrc={pongImg}
                    imgAlt={"Pong Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Pong Remake"}
                    desc={"Simple Two Player Pong Remake, coded with Python in Pygame. Player 1 controls with WASD, Player 2 controls with ARROW KEYS. Automatically tracks the score for the players."}
                />
                <Project
                    projectHref={"https://github.com/CloverCodes7062/infinite-running-ai"}
                    projectID={"project4"}
                    imgSrc={infiniteRunningAIImg}
                    imgAlt={"Running AI"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Infinite Running AI"}
                    desc={"Infinite Runnning Game where the player jumps over an obstacle. Built in Python using Pygame, integrated NEAT AI into the game for autonomous play using neat-python."}
                />
                <Project
                    projectHref={"https://keen-bonbon-73022c.netlify.app/"}
                    projectID={"project5"}
                    imgSrc={resumeBuilderImg}
                    imgAlt={"Resume Builder Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Resume Builder"}
                    desc={"Resume building web app. Built in Vite-React using JavaScript, JSX, HTML, CSS, Bootstrap, and Font-Awesome Styles. Users can add/remove anyting on the template."}
                />
                <Project
                    projectHref={"https://spiffy-starburst-3b84ed.netlify.app/"}
                    projectID={"project6"}
                    imgSrc={randomQuoteGenImg}
                    imgAlt={"Random Quote Gen Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Random Quote Generator"}
                    desc={"A Random Quote Generator. Built using jQuery, JavaScript, HTMl and CSS. Users can click and 'next quote' button to get another quote, with the background color having a chance to change on every click."}
                />
                <Project
                    projectHref={"https://github.com/CloverCodes7062/weather-app"}
                    projectID={"project7"}
                    imgSrc={weatherAppImg}
                    imgAlt={"Weather App Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Weather Web App"}
                    desc={"A Wether Web App, that allows users to check the weather. Built using HTML, CSS, JavaScript, NodeJS, jQuery, Bootstrap, and Font-Awesome-Styles. When a user inputs a valid zipcode, an AJAX request is made to a weather api, which returns the temperature in Fahrenheit and the feels like temperature."}
                />
                <Project
                    projectHref={"https://github.com/CloverCodes7062/expense-tracker"}
                    projectID={"project8"}
                    imgSrc={expensesTrackerImg}
                    imgAlt={"Expenses Tracker Img"}
                    imgWidth={"150"}
                    imgHeight={"100"}
                    title={"Expenses Tracker"}
                    desc={"Expenses Tracking Web App, built in Vite-React using JavaScript, JSX, HTML and CSS. Users can signup/login and save expenses to a database. Logging in retrieves data from a MySQL database hosted on Mircosoft Azure."}
                />
            </div>
        </div>
    );
}

export default Projects;
