import React from 'react';
import SectionBanner from './SectionBanner';

import bannerImg from '../../assets/menu/salad-bg.jpg'
import Menu from '../Home/Menu';

const Salads = () => {
    return (
        <section>
            <SectionBanner
                bannerImg={ bannerImg }
                primary={ "salads" }
                secondary={ "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
            />
            <Menu />
        </section>
    );
};

export default Salads;
