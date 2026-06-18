import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { BsFillCartFill } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const Header = () => {
  const { user, userLogout } = useAuth();
  const [isAdmin] = useAdmin();
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  // const [active, setActive] = useState(null)

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

  const style =
    'hover:bg-[#ff6b35] rounded-md hover:text-white active:bg-[#ff6b35] active:text-white uppercase';

  const handleUserRemove = () => {
    userLogout()
      .then(() => {})
      .catch((err) => {});
  };

  const largeDeviceMenuItems = (
    <>
      <li>
        <NavLink className={style} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={style} to="/menu">
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink className={style} to="/shop">
          our shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={style}
          to={`${isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}`}
        >
          Operations
        </NavLink>
      </li>
      <li>
        <span
          className={
            'btn bg-[#ff6b35] border-[#ff6b35] text-white mx-5 flex justify-center items-center w-12 rounded-md relative'
          }
        >
          <BsFillCartFill className="w-20" />
          <div className="badge absolute -top-2 left-6 w-5 h-5 text-black bg-white border-white">
            {cart?.length}
          </div>
        </span>
      </li>
    </>
  );

  return (
    <header
      className={`navbar border-b ${
        isScrolled
          ? 'bg-white text-black border-black/10'
          : 'bg-[#07100d]/70 text-white border-transparent'
      } h-20 font-semibold fixed z-10 transition-colors ease-in-out duration-300`}
    >
      <div className="navbar font-semibold lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 h-12">
            <img src="/dineOS-only-logo.png" alt="DineOS" className="h-12 w-auto" />
            <span className="font-cinzel font-black hidden md:inline text-lg lg:text-xl">
              DineOS
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">{largeDeviceMenuItems}</ul>
          </div>
          {user?.email ? (
            <div className="flex gap-3 items-center dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                className="tooltip tooltip-left tooltip-primary"
                data-tip={user.displayName}
              >
                <img className="rounded-full w-12" alt={user.displayName} src={user.photoURL} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 bg-white rounded-box w-52 flex flex-col gap-2"
              >
                <li className="list-none text-[#ff6b35]">
                  <Link
                    className="w-full hover:bg-[#ff6b35] hover:text-white"
                    to="/dashboard/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="list-none text-primary">
                  {' '}
                  <button
                    onClick={handleUserRemove}
                    className="btn btn-md rounded-md btn-outline border-[#ff6b35] text-[#ff6b35] w-full hover:text-white hover:bg-[#ff6b35]"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-md rounded-md btn-outline border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white lg:ml-5"
            >
              Log In
            </Link>
          )}
          <div className="dropdown dropdown-bottom dropdown-end flex">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-900 rounded-md text-white w-52">
              {largeDeviceMenuItems}
              <li>
                <NavLink className={style} to="/dashboard/operations">
                  <FaChartLine /> Live ops
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
