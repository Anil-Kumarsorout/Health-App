import React, { useEffect } from 'react';
import HomeSection2Component from './HomeSection2Component';
import HomeSEction3component from './HomeSEction3component';
import HomeSection4Component from './HomeSection4Component';
import Section1Component from './Section1Component';

const HomeComponent = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return (
        <div className=''>
<Section1Component/>
            <HomeSection2Component />

            <HomeSEction3component />
            <HomeSection4Component />
            </div>
    );
};

export default HomeComponent;