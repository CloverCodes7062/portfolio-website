import '/Users/stacymccarrell/Desktop/WebDevProjects/portfolio-website/portfolio-website/src/css/RightContainer.css'

function RightContainer() {
    return (
        <div className='right-container'>
            <p className='view-resume-p margin-top15'>
                <span>View Full Resume</span>
            </p>
            <div className='projects-container'>
                <div className='project'>
                    <img
                        className='resume-builder-img' 
                        src="src/jsx/resume-maker.png" 
                        alt="Resume Builder"
                        width="150"
                        height="100"
                    />
                    <div className='project-text'>
                        <h3 className='project-title'>Resume Builder</h3>
                        <p className='project-desc'>Project Desc</p>
                    </div>
                </div>
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
                        <p className='project-desc'>Project Desc</p>
                    </div> 
                </div>
                <div className='project not-first'>
                    <img
                        className='random-quote-gen-img' 
                        src="src/jsx/random-quote-gen.png" 
                        alt="Random Quote Gen"
                        width="150"
                        height="100"
                    />
                    <div className='project-text'>
                        <h3 className='project-title'>Random Quote Generator</h3>
                        <p className='project-desc'>Project Desc</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}


export default RightContainer;