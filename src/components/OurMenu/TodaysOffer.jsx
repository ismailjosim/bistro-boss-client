import React from 'react';
import SectionHeading from '../../utils/SectionHeading';
import useMenu from '../../Hooks/useMenu';
import Loading from '../../utils/Loading';
import FetchError from '../../utils/FetchError';
import MenuCard from '../Home/MenuCard';


const TodaysOffer = () => {
    const [menu, loading, error, progress] = useMenu()

    let content = null;

    if (loading) {
        content = <div className='flex justify-center items-center'>
            <Loading progress={ progress } />
        </div>
    }

    if (error) {
        content = <FetchError message={ error } />
    }

    if (!loading && menu.length === 0) {
        content = <FetchError message={ "No Data Found!" } />
    }

    if (!loading && menu.length > 0) {
        const popularItems = menu.filter(item => item.category === "offered");
        content = (
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                { popularItems.map((singleItem, index) => <MenuCard key={ index } singleItem={ singleItem } />) }
            </div>
        )
    }
    return (
        <section className='my-20'>
            <SectionHeading primary={ "Don't miss" } secondary={ "Today's offer" } />
            <div className='my-10 w-11/12 mx-auto'>
                { content }
            </div>
        </section>
    );
};

export default TodaysOffer;
