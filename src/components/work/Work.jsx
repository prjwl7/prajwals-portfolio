// Work.js

import React from 'react';
import './work.css'; // Import your CSS file
import Works from './Works';

const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h1 className="section__title">Portfolio</h1>
            <span className="section__subtitle">Major projects</span>
            <Works />
        </section>
    );
}

export default Work;
