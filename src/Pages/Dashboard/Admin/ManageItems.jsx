import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import SectionHeading from '../../../utils/SectionHeading';

const ManageItems = () => {
    return (
        <section>
            <SectionHeading primary={ 'Hurry Up!' } secondary={ 'MANAGE ALL ITEMS' } />
            <div className="w-11/12 mx-auto">
                <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total bookings: 3</h2>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th className='text-right'>ACTION</th>
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
                                                <img alt='' src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>Roast Duck Breast</td>
                                    <td>$71.5</td>
                                    <td className='flex gap-10 justify-end'>
                                        <button className='btn btn-secondary text-white rounded-md'>
                                            <BiEdit size={ 20 } />
                                        </button>
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

export default ManageItems;
