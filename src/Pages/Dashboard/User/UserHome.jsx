import { AiFillShop } from 'react-icons/ai';
import { BsFillCartFill, BsStarFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdWifiCalling3 } from 'react-icons/md';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();



    return (
        <section>
            <h3 className='text-3xl font-semibold font-cinzel text-center md:text-left'>Hi, Welcome Back { user && user.displayName }</h3>
            <div className="grid lg:grid-cols-3 mt-5 mx-auto gap-4 text-white">
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' } }>
                    <div>
                        <GiWallet size={ 60 }></GiWallet>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">205</p>
                        <h2 className="text-2xl capitalize">Menu</h2>
                    </div>
                </div>
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' } }>
                    <div>
                        <AiFillShop size={ 60 }></AiFillShop>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">205</p>
                        <h2 className="text-2xl capitalize">Shop</h2>
                    </div>
                </div>
                <div className="rounded-lg p-5 flex justify-center items-center gap-5" style={ { backgroundImage: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' } }>
                    <div>
                        <MdWifiCalling3 size={ 60 }></MdWifiCalling3>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">05</p>
                        <h2 className="text-2xl capitalize">contact</h2>
                    </div>
                </div>
            </div>
            <div className='mt-5 grid lg:grid-cols-2'>
                <div className='bg-primary flex flex-col justify-center p-10'>
                    <div className="avatar flex justify-center items-center">
                        <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={ user?.photoURL } alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold sm:text-2xl text-center mt-5">{ user?.displayName }</h2>
                </div>
                <div className='bg-[#FEF9C3] p-5 lg:mb-0 mb-10'>
                    <h3 className='text-2xl font-semibold uppercase'>Your activities</h3>
                    <div className='mt-5 flex flex-col gap-2'>
                        <p className='flex items-center text-2xl gap-2 font-medium text-[#0088FE] uppercase'>
                            <BsFillCartFill />
                            <span>Orders: 6</span>
                        </p>
                        <p className='flex items-center text-2xl gap-2 font-medium text-[#00C4A1] uppercase'>
                            <BsStarFill />
                            <span>Reviews: 6</span>
                        </p>
                        <p className='flex items-center text-2xl gap-2 font-medium text-[#FFBB28] uppercase'>
                            <FaCalendarAlt />
                            <span>Bookings: 6</span>
                        </p>
                        <p className='flex items-center text-2xl gap-2 font-medium text-[#FF8042] uppercase'>
                            <GiWallet />
                            <span>Payment: 6</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UserHome;
