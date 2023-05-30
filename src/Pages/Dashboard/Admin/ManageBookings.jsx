import SectionHeading from '../../../utils/SectionHeading';
import { AiOutlineCheck } from 'react-icons/ai';

const ManageBookings = () => {
    return (
        <section>
            <SectionHeading primary={ 'my cart' } secondary={ 'wanna add more?' } />
            <div className="w-11/12 mx-auto">
                <h2 className='uppercase text-xl font-bold font-cinzel my-5'>Total items: 6</h2>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th>USER EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>BOOKING DATE</th>
                            <th>BOOKING TIME</th>
                            <th>ACTIVITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        { [1, 2, 3, 4, 5].map((item, index) => {

                            return (
                                <tr key={ index }>
                                    <th>user@gmail.com</th>
                                    <td>+880564465456 </td>
                                    <td>25 May, 2023</td>
                                    <td>10.00PM</td>
                                    <td>Pending</td>
                                    <td>
                                        <button className='p-2 bg-success flex justify-center rounded-full text-white'>
                                            <AiOutlineCheck size={ 20 } />
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

export default ManageBookings;
