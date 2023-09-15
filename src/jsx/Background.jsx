import '../css/Background.css';
import React from 'react';

function Background({ children }) {
    return (
        <div className="background">
            {children}
        </div>
    );
}

export default Background;