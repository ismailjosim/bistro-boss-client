import React, { useState } from 'react';
import SectionHeading from '../../../utils/SectionHeading';
import useMenu from '../../../Hooks/useMenu';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


    const handleMenuUpdate = (item) => {
        console.log(item);
    };

    const handleMenuDelete = (id) => {
        // Delete the item with the specified ID
        axiosSecure.delete(`/menu/${ id }`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    console.log(res.data);
                    refetch()
                }
            })

    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // section: implement Pagination system on client side
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(menu.length / itemsPerPage);

    const getPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return menu.slice(startIndex, endIndex);
    };

    return (
        <section>
            <SectionHeading primary={ 'Hurry Up!' } secondary={ 'MANAGE ALL ITEMS' } />
            <div className="w-11/12 mx-auto">
                <h2 className="uppercase text-xl font-bold font-cinzel my-5">Total bookings: 3</h2>
                <table className="table w-full">
                    {/* head */ }
                    <thead className="">
                        <tr className="uppercase">
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th className="text-right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        { getPageItems().map((item) => {
                            const { _id, image, name, price } = item;
                            return (
                                <tr key={ _id }>
                                    <th></th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-14 rounded">
                                                <img alt={ name } src={ image } />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ name }</td>
                                    <td>${ price }</td>
                                    <td className="flex gap-10 justify-end">
                                        <button onClick={ () => handleMenuUpdate(item) } className="btn btn-secondary text-white rounded-md">
                                            <BiEdit size={ 20 } />
                                        </button>
                                        <button onClick={ () => handleMenuDelete(_id) } className="btn btn-error text-white rounded-md">
                                            <BsFillTrash3Fill size={ 20 } />
                                        </button>
                                    </td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>

                <div className="flex justify-center items-center my-5">
                    <button
                        className="btn btn-secondary rounded-md mr-2"
                        disabled={ currentPage === 1 }
                        onClick={ () => handlePageChange(currentPage - 1) }
                    >
                        <AiOutlineArrowLeft size={ 20 } />
                    </button>
                    <span className="text-xl font-bold mx-2">{ currentPage }</span>
                    <button
                        className="btn btn-secondary rounded-md ml-2"
                        disabled={ currentPage === totalPages }
                        onClick={ () => handlePageChange(currentPage + 1) }
                    >
                        <AiOutlineArrowRight size={ 20 } />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ManageItems
