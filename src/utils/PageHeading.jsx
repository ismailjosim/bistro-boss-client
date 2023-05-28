import React from 'react';

const PageHeading = ({ bannerImg, primary, secondary }) => {
    return (
        <div className="hero lg:h-[80vh] h-[60vh]" style={ { backgroundImage: `url(${ bannerImg })` } }>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="lg:w-9/12 w-11/12 text-center mx-auto bg-black/50  text-white lg:py-28 py-10 uppercase font-cinzel">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">{ primary }</h2>
                <p className=''>{ secondary }</p>
            </div>
        </div>
    );
};

export default PageHeading;
