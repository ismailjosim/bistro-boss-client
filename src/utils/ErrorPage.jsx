import React from 'react';
import { useLottie } from "lottie-react";
import animation from '../assets/animation.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const options = {
        animationData: animation,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className='text-center flex flex-col justify-center items-center mt-32'>
            <div className='w-1/2 mx-auto'>
                { View }
            </div>
            <h2 className='text-3xl font-semibold mb-5'>Page Not Found!</h2>
            <Link to={ '/' } className='btn btn-primary text-white'>Back To Home</Link>

        </div>

    );
};

export default ErrorPage;
