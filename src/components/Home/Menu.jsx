import React, { useEffect, useState } from 'react';
import SectionHeading from '../../utils/SectionHeading';
import Loading from '../../utils/Loading';
import PopularMenuCard from './PopularMenuCard';
import FetchError from '../../utils/FetchError';

const Menu = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)


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
            })
            .catch(err => {
                setError(err.message)
            })
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

    if (error) {
        content = <FetchError message={ error } />
    }

    if (!loading && popularMenu.length === 0) {
        content = <FetchError message={ "No Data Found!" } />
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
