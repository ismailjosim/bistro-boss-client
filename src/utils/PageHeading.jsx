import React from 'react';

const PageHeading = ({ bannerImg, primary, secondary }) => {
    return (
        <div className="hero h-[80vh]" style={ { backgroundImage: `url(${ bannerImg })` } }>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="w-9/12 text-center mx-auto bg-black/50  text-white py-28 uppercase font-cinzel">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl ">{ primary }</h2>
                <p className=''>{ secondary }</p>
            </div>
        </div>
    );
};

export default PageHeading;
