import React from 'react';
import { AiFillShop } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { MdWifiCalling3 } from 'react-icons/md';

const UserHome = () => {
    return (
        <section>
            <h3 className='text-3xl font-semibold font-cinzel text-center md:text-left'>Hi, Welcome Back!</h3>
            <div className="grid lg:grid-cols-3 mt-5 mx-auto gap-4 text-white">
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' } }>
                    <div>
                        <GiWallet size={ 80 }></GiWallet>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">205</p>
                        <h2 className="text-2xl capitalize">Menu</h2>
                    </div>
                </div>
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' } }>
                    <div>
                        <AiFillShop size={ 80 }></AiFillShop>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">205</p>
                        <h2 className="text-2xl capitalize">Shop</h2>
                    </div>
                </div>
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' } }>
                    <div>
                        <MdWifiCalling3 size={ 80 }></MdWifiCalling3>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">05</p>
                        <h2 className="text-2xl capitalize">contact</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserHome;
