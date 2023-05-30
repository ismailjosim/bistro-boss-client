import React from 'react';
import SectionHeading from '../../../utils/SectionHeading';
import { Link } from 'react-router-dom'
import { BsFillTrash3Fill } from 'react-icons/bs';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const { cart, refetch } = useCart();


    const total = cart?.reduce((sum, item) => item.price + sum, 0);


    // handle delete
    const handleDelete = id => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm('are you Sure!');
        if (confirmed) {
            fetch(`http://localhost:5000/carts/${ id }`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("Item delete successfully!");
                        refetch()
                    }

                })
        }

    }





    return (
        <section>
            <SectionHeading primary={ 'my cart' } secondary={ 'wanna add more?' } />
            <div className="w-11/12 mx-auto">
                <div className='flex justify-between items-center mt-5'>
                    <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total Orders: { cart?.length }</h2>
                    <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total Price: ${ total.toFixed(2) }</h2>
                    <Link to={ '/' } className='btn btn-primary text-white hover:btn-secondary transition-all ease-in-out duration-300'>PAY</Link>
                </div>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        { cart && cart.map((item, index) => {
                            const { category, image, itemId, name, price, userEmail, userName, _id } = item || {}
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-14 rounded">
                                                <img src={ image } alt={ name } />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ name }</td>
                                    <td>${ price }</td>
                                    <td>
                                        <button onClick={ () => handleDelete(_id) } className='btn btn-error hover:btn-primary hover:text-white text-white rounded-md'>
                                            <BsFillTrash3Fill size={ 20 } />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyCart;
