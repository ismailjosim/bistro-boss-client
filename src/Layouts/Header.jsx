import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext)

    const style = "hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg"



    const menuItems = <>
        <li><NavLink className={ style } to='/'>Home</NavLink></li>
        <li><NavLink className={ style } to='/alltoys'>All Toys</NavLink></li>
        <li><NavLink className={ style } to='/mytoys'>My Toys</NavLink></li>
        <li><NavLink className={ style } to='/blog'>Blog</NavLink></li>
    </>

    const handleUserRemove = () => {
        userLogout()
            .then(() => { })
            .catch(err => console.log(err.message))
    }


    return (
        <div className="navbar bg-base-100 h-20 font-semibold w-11/12 mx-auto">

            <div className="navbar-start">
                <Link to="/" className='flex items-center gap-2'>
                    <img src={ logo } width={ 100 } alt="Master Chef" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    { menuItems }
                </ul>
            </div>
            <div className="navbar-end">
                { user?.email ?
                    <div className='flex gap-3 items-center dropdown dropdown-bottom dropdown-end'>
                        <div tabIndex={ 0 } className="tooltip tooltip-left tooltip-primary" data-tip={ user.displayName }>
                            <img className='rounded-full w-12' alt={ user.displayName } src={ user.photoURL } />
                        </div>
                        <ul tabIndex={ 0 } className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='list-none'><Link to='/profile'>Profile</Link></li>
                            <li className='list-none'><Link to='/mytoys'>My Toys</Link></li>
                            <li className='list-none'> <button onClick={ handleUserRemove } className="btn btn-md rounded-md btn-outline btn-primary">Logout</button></li>
                        </ul>
                    </div>
                    :
                    <Link to='/login' className="btn btn-md rounded-md btn-outline btn-primary">Log In</Link>
                }
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        { menuItems }
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;
