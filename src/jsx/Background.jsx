import '/Users/stacymccarrell/Desktop/WebDevProjects/portfolio-website/portfolio-website/src/css/Background.css';
import React, { useEffect, useState } from 'react';

function Background({ children }) {
    return (
        <div className="background">
            {children}
        </div>
    );
}

export default Background;