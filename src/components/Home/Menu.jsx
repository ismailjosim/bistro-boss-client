import React, { useEffect, useState } from 'react';
import SectionHeading from '../../utils/SectionHeading';
import Loading from '../../utils/Loading';
import PopularMenuCard from './PopularMenuCard';

const Menu = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)


    const url = 'menu.json';
    const category = "popular";

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                const popularItems = data.filter(item => item.category === category);
                setPopularMenu(popularItems);
            });
    }, []);

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

    if (!loading && popularMenu.length === 0) {
        content = <h3>No data Found!</h3>
    }

    if (!loading && popularMenu.length > 0) {
        content = (
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
                { popularMenu.map((singleItem, index) => <PopularMenuCard key={ index } singleItem={ singleItem } />) }
            </div>
        )
    }


    return (
        <section>
            <SectionHeading primary={ "Check it out" } secondary={ "FROM OUR MENU" } />


            <div className='my-10 w-11/12 mx-auto'>
                { content }
            </div>

        </section>
    );
};

export default Menu;
