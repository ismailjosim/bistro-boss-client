import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { RiAdminFill } from 'react-icons/ri';
import SectionHeading from '../../../utils/SectionHeading';
import useUser from '../../../Hooks/useUser';

const AllUsers = () => {
    const { users } = useUser();


    const handleUpdate = id => {
        fetch(`http://localhost:5000/users/admin/${ id }`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert("Make Admin Successfully!")
                }
            })
    }



    return (
        <section>
            <SectionHeading primary={ 'my cart' } secondary={ 'wanna add more?' } />
            <div className="w-11/12 mx-auto">
                <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total users: { users.length }</h2>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th></th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        { users && users.map((item, index) => {
                            const { _id, name, email, role } = item || {}
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <td>{ name }</td>
                                    <td>{ email }</td>
                                    <td>
                                        <button onClick={ () => handleUpdate(_id) } className='btn btn-secondary text-white rounded-md'>
                                            { role && role === 'admin' ?
                                                <RiAdminFill size={ 25 } /> :
                                                <IoIosPeople size={ 25 } />
                                            }
                                        </button>
                                    </td>
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

export default AllUsers;
