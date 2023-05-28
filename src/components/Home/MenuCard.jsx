import React from 'react';

const MenuCard = ({ singleItem }) => {
    const { name, image, price, recipe } = singleItem || {}
    return (
        <div className='flex gap-5'>
            <img
                className='w-24 hover:scale-110 transition-all duration-500'
                src={ image }
                alt={ name }
                style={ { borderRadius: '0 200px 200px 200px' } }
            />
            <div>
                <h3 className='uppercase text-xl font-cinzel font-medium'>{ name }------------------</h3>
                <p>{ recipe }</p>
            </div>
            <p className='text-primary'>${ price }</p>

        </div>
    );
};

export default MenuCard;
