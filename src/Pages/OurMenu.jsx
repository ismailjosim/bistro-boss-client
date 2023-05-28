import TodaysOffer from '../components/OurMenu/TodaysOffer';
import Desserts from '../components/OurMenu/Desserts';

import bannerImg from '../assets/menu/banner3.jpg'
import PageHeading from '../utils/PageHeading';
import Pizza from '../components/OurMenu/Pizza';
import Salads from '../components/OurMenu/Salads';
import Soups from '../components/OurMenu/Soups';


const OurMenu = () => {
    return (
        <main>
            <PageHeading bannerImg={ bannerImg } primary={ "our menu" } secondary={ "Would you like to try a dish?" } />
            <TodaysOffer />
            <Desserts />
            <Pizza />
            <Salads />
            <Soups />
        </main>
    );
};

export default OurMenu;
