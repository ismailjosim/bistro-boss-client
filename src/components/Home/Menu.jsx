import React, { useEffect, useState } from 'react';
import SectionHeading from '../../utils/SectionHeading';
import Loading from '../../utils/Loading';
import MenuCard from './MenuCard';
import FetchError from '../../utils/FetchError';
import useMenu from '../../Hooks/useMenu';

const Menu = () => {
    const [menu, loading, error] = useMenu()
    const [progress, setProgress] = useState(0);

    // section: Show Food Items According to category
    const popularItems = menu.filter(item => item.category === "popular");

    // calculate Progress for loading state
    useEffect(() => {
        const interval = setInterval(() => {
            if (loading) {
                setProgress(prevProgress => (prevProgress + 10) % 100);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [loading]);

    let content = null;

    if (loading) {
        content = <div className='flex justify-center items-center'>
            <Loading progress={ progress } />
        </div>
    }

    if (error) {
        content = <FetchError message={ error } />
    }

    if (!loading && popularItems.length === 0) {
        content = <FetchError message={ "No Data Found!" } />
    }

    if (!loading && popularItems.length > 0) {
        content = (
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                { popularItems.map((singleItem, index) => <MenuCard key={ index } singleItem={ singleItem } />) }
            </div>
        )
    }


    return (
        <section>
            <SectionHeading primary={ "Check it out" } secondary={ "OUR Popular MENU" } />

            <div className='my-10 w-11/12 mx-auto'>
                { content }
            </div>
            <div className='text-center py-5'>
                <button className='btn btn-primary'>View Full Menu</button>
            </div>
        </section>
    );
};

export default Menu;
