import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch all categories
    useEffect(() => {
        fetch(`${ process.env.REACT_APP_SERVER_URL }/categories`)
            .then((res) => res.json())
            .then((data) => {
                if (data.categories.length > 0) {
                    setCategories(data.categories);
                    setActiveTab(data.categories[0].categoryId);
                }
            });
    }, []);

    // Fetch all products
    useEffect(() => {
        fetch(`${ process.env.REACT_APP_SERVER_URL }/toys`)
            .then((res) => res.json())
            .then((data) => {
                if (data.toys.length > 0) {
                    setProducts(data.toys);
                }
                setIsLoading(false);
            });
    }, []);

    const handleTabClick = (categoryId) => {
        setActiveTab(categoryId);
    };

    const filteredProducts = products.filter(
        (product) => product.categoryId === activeTab
    );

    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className='my-10 text-center'>
                <h3 className='text-2xl font-semibold'>Our Top Toy Collection</h3>
                <p className='text-base'>Most linked toy by your children</p>
            </div>
            <div className='tabs tabs-boxed flex justify-center items-center bg-transparent'>
                { categories?.map((category, index) => {
                    const { _id, name, categoryId } = category;
                    return (
                        <button
                            className={ `tab tab-rounded-none  ${ activeTab === categoryId ? 'tab-active bold text-white uppercase font-semibold' : 'normal'
                                }` }
                            key={ _id }
                            onClick={ () => handleTabClick(categoryId) }
                        >
                            { name }
                        </button>
                    );
                }) }
            </div>

            { isLoading ? (
                <p className='text-center mt-5'>Loading...</p>
            ) : filteredProducts.length === 0 ? (
                <p className='text-center mt-5'>No data available.</p>
            ) : (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
                    { filteredProducts.map((product, index) => {
                        const { img, title, price, rating, id } = product;
                        return (
                            <div key={ index }>
                                <div className='card w-full bg-base-100 shadow-md rounded-md'>
                                    <figure className='px-10 pt-10'>
                                        <img src={ img } alt={ title } className='rounded-md' />
                                    </figure>
                                    <div className='card-body'>
                                        <h2 className='card-title'>{ title }</h2>
                                        <p>Price: ${ price }</p>
                                        <p>Rating: { rating }</p>
                                        <div className='card-actions'>
                                            <Link to={ `/toy/${ id }` } className='btn btn-primary'>
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            ) }
        </div>
    );
};

export default Products;
