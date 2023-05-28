import React from 'react';
import PageHeading from '../utils/PageHeading';
import bannerImg from '../assets/shop/banner2.jpg'

const Shop = () => {
    return (
        <main>
            <PageHeading bannerImg={ bannerImg } primary={ "Our shop" } secondary={ "would you like to try a dish?" } />

        </main>
    );
};

export default Shop;
