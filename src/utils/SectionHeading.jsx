import React from 'react';
import '../CSS/custom.css'

const SectionHeading = ({ primary, secondary }) => {
    return (
        <div className='text-center'>
            <p className='text-primary text-lg'>
                <span>---</span>
                <span>{ primary }</span>
                <span>---</span>
            </p>
            <div className='inline-block pt-5'>
                <span className='border-2 w-full block'></span>
                <h2 id="order-heading" className='text-neutral text-4xl font-normal uppercase my-3'>{ secondary }</h2>
                <span className='border-2 w-full block'></span>
            </div>
        </div>

    );
};

export default SectionHeading;
