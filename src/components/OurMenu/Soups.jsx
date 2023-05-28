import React from 'react';
import SectionBanner from './SectionBanner';
import Menu from '../Home/Menu';

import bannerImg from '../../assets/menu/soup-bg.jpg'

const Soups = () => {
    return (
        <section>
            <SectionBanner
                bannerImg={ bannerImg }
                primary={ "Soups" }
                secondary={ "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
            />
            <Menu />
        </section>
    );
};

export default Soups;
