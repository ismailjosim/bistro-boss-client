import React from 'react';
import bannerImg from '../../assets/menu/pizza-bg.jpg'
import SectionBanner from './SectionBanner';
import Menu from '../Home/Menu';

const Pizza = () => {
    return (
        <section>
            <SectionBanner
                bannerImg={ bannerImg }
                primary={ "Pizza" }
                secondary={ "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
            />
            <Menu />
        </section>
    );
};

export default Pizza;
