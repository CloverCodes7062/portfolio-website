import '../css/RightContainer.css'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import flappyBirdImg from "../assets/flappybird-ai.png";
import resumeBuilderImg from '../assets/resume-maker.png';
import randomQuoteGenImg from '../assets/random-quote-gen.png';
import resumePdf from '../assets/Resume.pdf';
import travelExplorerAppImg from '../assets/travel-explorer-app.png';

function RightContainer() {

    return (
        <div className='right-container'>
            <p id='view-about'>&emsp;I'm a Computer Science student at Western Governors University with a passion for all aspects of software development. My journey in the world of code has been both exciting and enlightening. From creating innovative projects to solving complex coding challenges, I thrive on the endless possibilities that software engineering offers.</p>
            <p className='margin-top15'>&emsp;As a dedicated learner and aspiring software engineer, I constantly seek new opportunities to expand my knowledge and skills. Whether it's building web applications, experimenting with AI, or generating creative solutions, I'm always eager to explore the ever-evolving landscape of technology.</p>
            <a href={resumePdf} target='_blank' rel='noopener noreferrer'>
                <p className='view-resume-p margin-top15' id='view-resume'>
                    <span>View Full Resume</span>
                    {" "}
                    <FontAwesomeIcon 
                        icon={["fas", "arrow-right"]}
                        className='right-arrow-icon'
                    />
                </p>
            </a>
            <div className='projects-container'>
                <a className="project-a-tag" href="https://github.com/CloverCodes7062/flappy-bird-ai" target="_blank">
                    <div className="project project-first">
                        <img
                            className='flappy-bird-img' 
                            src={flappyBirdImg} 
                            alt="Flappy Bird img"
                            width="75"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title flappy-bird-text main-page-project-title'>Flappy Bird with AI</h3>
                            <p className='project-desc'>Flappy Bird Clone. Created with Python using Pygame. Integrated NEAT AI into the game for autonomous play using neat-python.</p>
                        </div>
                    </div>
                </a>
                <a className='project-a-tag' href='https://kaleidoscopic-muffin-0c2208.netlify.app' target='_blank'>
                    <div className='project not-first'>
                        <img
                            className='resume-builder-img' 
                            src={travelExplorerAppImg}
                            alt="Travel Explorer App Img"
                            width="150"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title main-page-project-title'>Travel Destination Explorer</h3>
                            <p className='project-desc'>Built Using Vite-React, Node.js, CSS, Bootstrap, Font Awesome Styles, and several APIs (GoogleMaps, Geocage Geocoding, TripAdivsor). Travel Destination Explorer that displays three countries and infomation about them. Users can input a location to visit a detailed view with more information about it.</p>
                        </div> 
                    </div>
                </a>
                <a className='project-a-tag' href='https://spiffy-starburst-3b84ed.netlify.app/' target='_blank'>
                    <div className='project not-first random-quote-gen'>
                        <img
                            className='random-quote-gen-img' 
                            src={randomQuoteGenImg}
                            alt="Random Quote Gen"
                            width="150"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title main-page-project-title'>Random Quote Generator</h3>
                            <p className='project-desc'>A Random Quote Generator. Built using jQuery, JavaScript, HTML and CSS. Users can click and "next quote" button to get another quote, with the background color having a chance to change on every click.</p>
                        </div> 
                    </div>
                </a>
            </div>
            <Link to='/projects' className='view-all-projects-p margin-top15'>
                <span className='view-all-projects-p'>View All Projects</span>
                {" "}
                <FontAwesomeIcon 
                    icon={["fas", "arrow-right"]}
                    className='right-arrow-icon'
                />
            </Link>
        </div>
    );
}


export default RightContainer;