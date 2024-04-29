import React, { useEffect } from 'react';
import Section1Component from './Section1Component';
import Section2Component from './Section2Component';
import AboutSection1component from './AboutSection1component';

const AboutComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return (
        <div className=''>
            <AboutSection1component/>
            <Section1Component/>
            <Section2Component/>
        </div>
    );
};

export default AboutComponent;