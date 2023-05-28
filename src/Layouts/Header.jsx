import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';


const Header = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    // add scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const style = "hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white uppercase"

    const handleUserRemove = () => {
        userLogout()
            .then(() => { })
            .catch(err => console.log(err.message))
    }

    const largeDeviceMenuItems = <>
        <li><NavLink className={ style } to='/'>Home</NavLink></li>
        <li><NavLink className={ style } to='/menu'>our menu</NavLink></li>
        <li><NavLink className={ style } to='/shop'>our shop</NavLink></li>
        <li><NavLink className={ style } to='/mytoys'>Dashboard</NavLink></li>
        <li><NavLink className={ style } to='/blog'>our menu</NavLink></li>
    </>


    return (
        <header
            className={ `navbar border-b-2 ${ isScrolled ? 'bg-white text-black border-primary' : 'bg-black/30 text-white border-transparent'
                } h-20 font-semibold fixed z-10 transition-colors ease-in-out duration-300` }
        >
            <div className="navbar font-semibold lg:w-11/12 mx-auto">
                <div className="navbar-start">
                    <Link to="/" className='flex flex-col justify-center'>
                        <span className="font-cinzel font-black md:text-2xl text-lg lg:text-3xl">BISTRO BOSS</span>
                        <span className="font-cinzel hidden lg:inline md:inline md:tracking-widest lg:tracking-[.5rem] font-semibold text-2xl">Restaurant</span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-3">
                            { largeDeviceMenuItems }
                        </ul>
                    </div>
                    { user?.email ?
                        <div className='flex gap-3 items-center dropdown dropdown-bottom dropdown-end'>
                            <div tabIndex={ 0 } className="tooltip tooltip-left tooltip-primary" data-tip={ user.displayName }>
                                <img className='rounded-full w-12' alt={ user.displayName } src={ user.photoURL } />
                            </div>
                            <ul tabIndex={ 0 } className="dropdown-content menu p-2 bg-white rounded-box w-52 flex flex-col gap-2">
                                <li className='list-none text-primary'><Link className='w-full hover:bg-primary hover:text-white' to='/profile'>Profile</Link></li>
                                <li className='list-none text-primary'> <button onClick={ handleUserRemove } className="btn btn-md rounded-md btn-outline btn-primary w-full hover:text-white">Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' className="btn btn-md rounded-md btn-outline btn-primary">Log In</Link>
                    }
                    <div className="dropdown dropdown-bottom dropdown-end flex">
                        <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-900 rounded-box text-white w-52">
                            { largeDeviceMenuItems }
                        </ul>

                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
