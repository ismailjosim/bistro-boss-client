import Swal from 'sweetalert2'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import SectionHeading from '../../../utils/SectionHeading';
import useUser from '../../../Hooks/useUser';

const AllUsers = () => {
    const { users, refetch } = useUser();

    // handle Update Admin
    const handleUpdate = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: `make ${ user.name } Admit 🥰`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ process.env.REACT_APP_SERVER_URL } /users/admin/${ user._id }`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Make Admin Successfully 🎉🎉',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    })
            }
        })
    }

    // Delete User From Database
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to Delete`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ process.env.REACT_APP_SERVER_URL } /users/${ id }`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User Deleted Successfully 🎉🎉',
                                showConfirmButton: false,
                                timer: 1000
                            })
                            refetch()
                        }
                    })


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

                        { users && users.map((user, index) => {
                            const { _id, name, email, role } = user || {}
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <td>{ name }</td>
                                    <td>{ email }</td>
                                    <td>
                                        { role && role ?
                                            <span className='font-semibold uppercase'>Admin</span>
                                            :
                                            <button onClick={ () => handleUpdate(user) } className='btn btn-secondary text-white rounded-md'>
                                                <IoIosPeople size={ 25 } />
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={ () => handleDelete(_id) } className='btn btn-error text-white rounded-md'>
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
