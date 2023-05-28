import React from 'react';
import bannerImg from '../../assets/menu/dessert-bg.jpeg'
import SectionBanner from './SectionBanner';
import Menu from '../Home/Menu';

const Desserts = () => {
    return (
        <section>
            <SectionBanner
                bannerImg={ bannerImg }
                primary={ "Desserts" }
                secondary={ "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
            />
            <Menu />
        </section>
    );
};

export default Desserts;
