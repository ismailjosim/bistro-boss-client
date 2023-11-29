import React from 'react';
import Slider from '../components/Home/Slider';

import '../CSS/custom.css'

import Categories from '../components/Home/Categories';
import CallToAction from '../components/Home/CTA';
import Menu from '../components/Home/Menu';
import Info from '../components/Home/Info';
import ChefsChoice from '../components/Home/ChefsChoice';
import About from '../components/Home/About';



const Home = () => {




    return (
        <main>
            <Slider />
            <Categories />
            <Info />
            <Menu />
            <CallToAction />
            <ChefsChoice />
            <About />
        </main>
    );
};

export default Home;
