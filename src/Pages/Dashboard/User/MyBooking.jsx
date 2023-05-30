import React from 'react';
import SectionHeading from '../../../utils/SectionHeading';
import { Link } from 'react-router-dom'
import { BsFillTrash3Fill } from 'react-icons/bs';

const MyBooking = () => {
    return (
        <section>
            <SectionHeading primary={ 'my cart' } secondary={ 'wanna add more?' } />
            <div className="w-11/12 mx-auto">
                <div className='flex justify-between items-center mt-5'>
                    <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total bookings: 3</h2>
                    <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total Price: 06</h2>
                    <Link to={ '/' } className='btn btn-primary text-white hover:btn-secondary transition-all ease-in-out duration-300'>PAY</Link>
                </div>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>GUEST NUMBER</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        { [1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-14 rounded">
                                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>Roast Duck Breast</td>
                                    <td>$71.5</td>
                                    <td>
                                        <button className='btn btn-error text-white rounded-md'>
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

export default MyBooking;
