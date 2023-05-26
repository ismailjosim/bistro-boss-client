import React, { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { FaShoppingCart } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Hero = () => {
    const [slideData, setSlideData] = useState([]);

    useEffect(() => {
        fetch('slideData.json')
            .then(res => res.json())
            .then(data => setSlideData(data))
    }, [])

    const properties = {
        prevArrow: <button className='btn btn-primary text-white text-lg ml-5 absolute bottom-20'><AiFillCaretLeft /></button>,
        nextArrow: <button className='btn btn-primary text-white text-lg mr-5 absolute bottom-20'><AiFillCaretRight /></button>
    }

    return (
        <Fade { ...properties }>
            { slideData.map((slide, idx) => {
                const { title, thumbnail } = slide;
                return (
                    <section
                        key={ idx }
                        style={ {
                            backgroundImage: `url(${ thumbnail })`,
                            backgroundSize: 'cover',
                            height: 'calc(100vh - 4rem)',
                            maxHeight: '90vh'
                        } }
                        className="relative bg-no-repeat"
                    >
                        <div className="absolute inset-0 bg-slate-900/30 sm:bg-gradient-to-r sm:from-black/75 sm:to-secondary/25"></div>
                        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
                            <div className="max-w-xl text-center sm:text-left text-white">
                                <h1 className="text-3xl font-extrabold sm:text-5xl flex flex-col gap-3">
                                    <span>{ title }</span>
                                </h1>
                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    Gets your taste buds a jolt of sweetness. Taste our candy and fall in love. The candy store that will make you want more. Serving all the candies in town since 2020.
                                </p>
                                <div className="mt-8 flex justify-center lg:justify-start md:justify-start flex-wrap gap-4 text-center">
                                    <button className='btn btn-secondary text-white hover:btn-primary active:btn-primary hover:text-white'>Get Started</button>
                                    <button className='btn btn-primary text-white flex gap-1'><span>Order Now</span> <FaShoppingCart className='text-xl' /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }) }
        </Fade>

    );
};

export default Hero;
