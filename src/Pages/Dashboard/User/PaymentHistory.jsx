import React from 'react';
import SectionHeading from '../../../utils/SectionHeading';

const PaymentHistory = () => {
    return (
        <section>
            <SectionHeading primary={ 'at a glance' } secondary={ 'payment history' } />
            <div className="w-11/12 mx-auto">
                <h2 className='uppercase text-3xl font-bold font-cinzel my-5'>Total Payment: 06</h2>
                <table className="table w-full">
                    {/* head */ }
                    <thead className=''>
                        <tr className='uppercase'>
                            <th>EMAIL</th>
                            <th>CATEGORY</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYMENT DATA</th>
                        </tr>
                    </thead>
                    <tbody>

                        { [1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <tr key={ index }>
                                    <td>info@gmail.com</td>
                                    <td>Food Order</td>
                                    <td>$71.5</td>
                                    <td>Monday, April 10, 2023</td>
                                </tr>
                            )
                        }) }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PaymentHistory;
