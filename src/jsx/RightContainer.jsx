import '/Users/stacymccarrell/Desktop/WebDevProjects/portfolio-website/portfolio-website/src/css/RightContainer.css'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function RightContainer() {

    return (
        <div className='right-container'>
            <p>This is a placeholder about section.</p>
            <a href='src/jsx/Resume.pdf' target='_blank' rel='noopener noreferrer'>
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
                    <div className="project">
                        <img
                            className='resume-builder-img' 
                            src="src/jsx/flappybird-ai.png" 
                            alt="Flappy Bird img"
                            width="150"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title'>Flappy Bird with AI</h3>
                            <p className='project-desc'>Flappy Bird Clone. Created with Python using Pygame. Integrated NEAT AI into the game for autonomous play using neat-python.</p>
                        </div>
                    </div>
                </a>
                <a className='project-a-tag' href='https://keen-bonbon-73022c.netlify.app/' target='_blank'>
                    <div className='project not-first'>
                        <img
                            className='resume-builder-img' 
                            src="src/jsx/resume-maker.png" 
                            alt="Resume Builder"
                            width="150"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title'>Resume Builder</h3>
                            <p className='project-desc'>Simple resume building web app. Built ing Vite-React using JavaScript, JSX, HTML, CSS, Bootstrap, and Font-Awesome Styles. Users can add/remove anyting on the template.</p>
                        </div> 
                    </div>
                </a>
                <a className='project-a-tag' href='https://spiffy-starburst-3b84ed.netlify.app/' target='_blank'>
                    <div className='project not-first random-quote-gen'>
                        <img
                            className='random-quote-gen-img' 
                            src="src/jsx/random-quote-gen.png" 
                            alt="Random Quote Gen"
                            width="150"
                            height="100"
                        />
                        <div className='project-text'>
                            <h3 className='project-title'>Random Quote Generator</h3>
                            <p className='project-desc'>A Random Quote Generator. Built using jQuery, JavaScript, HTMl and CSS. Users can click and "next quote" button to get another quote, with the background color having a chance to change on every click.</p>
                        </div> 
                    </div>
                </a>
            </div>
            <Link to='/projects' className='view-all-projects-p margin-top15'>
                <span>View All Projects</span>
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