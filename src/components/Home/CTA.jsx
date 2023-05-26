import React from 'react';
import imageBg from '../../assets/imagebg.jpg'

const CTA = () => {
    return (
        <div className="hero lg:w-9/12 w-11/12 mx-auto py-10 my-10" style={ { backgroundImage: `url(${ imageBg })` } }>
            <div className="hero-content text-center">
                <div className="bg-white lg:py-10 lg:px-20 py-5 lg:w-9/12 w-full mx-auto">
                    <h1 className="mb-5 text-5xl font-semibold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
