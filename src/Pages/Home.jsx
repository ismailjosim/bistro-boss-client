import React from 'react';
import Slider from '../components/Home/Slider';
import '../CSS/custom.css'
import Categories from '../components/Home/Categories';
import CTA from '../components/Home/CTA';
import Menu from '../components/Home/Menu';


const Home = () => {
    return (
        <>
            <Slider />
            <Categories />
            <CTA />
            <Menu />
        </>
    );
};

export default Home;
