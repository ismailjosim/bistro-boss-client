import React from 'react';
import { AiFillCloseSquare, AiFillHome } from 'react-icons/ai';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import {
  FaBell,
  FaCalendarAlt,
  FaChartLine,
  FaClipboardList,
  FaMotorcycle,
  FaShoppingCart,
  FaUsersCog,
} from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { ImMenu } from 'react-icons/im';
import { MdInventory, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbChefHat } from 'react-icons/tb';
import { Link, NavLink, Outlet } from 'react-router-dom';
import '../CSS/custom.css';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const style =
    'hover:bg-[#ff6b35] rounded-md hover:text-white active:bg-[#ff6b35] active:text-white uppercase font-medium w-full';

  // TODO: load data from the server to hanve dynamic isAdmin based on data.
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content min-h-screen bg-[#f7f4ef] p-5 lg:p-8">
          <Outlet />
        </div>

        <label
          htmlFor="my-drawer-2"
          className="absolute top-2 -left-2 text-2xl bg-[#ff6b35] pl-5 p-2 rounded-md text-white"
        >
          <ImMenu></ImMenu>
        </label>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 bg-[#15201d] text-white dashboard-layout pt-10 w-72">
            <Link to="/" className="flex flex-col justify-center">
              <span className="font-cinzel font-black md:text-2xl text-lg lg:text-3xl">DineOS</span>
              <span className="font-cinzel hidden lg:inline md:inline md:tracking-widest lg:tracking-[.5rem] font-semibold text-2xl">
                Restaurant OS
              </span>
            </Link>
            <label
              htmlFor="my-drawer-2"
              className="absolute top-8 right-2 text-4xl lg:hidden md:hidden bg-[#15201d] rounded-md text-white"
            >
              <AiFillCloseSquare></AiFillCloseSquare>
            </label>
            <span className="mt-10"></span>
            {isAdmin ? (
              <>
                <>
                  <li>
                    <NavLink className={style} to="/dashboard/adminhome">
                      <AiFillHome />
                      <span>Admin Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/operations">
                      <FaChartLine />
                      <span>Operations</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/kitchen">
                      <TbChefHat />
                      <span>Kitchen board</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/menu-inventory">
                      <MdInventory />
                      <span>Menu & inventory</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/additems">
                      <FaCalendarAlt />
                      <span>add items</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/manageitems">
                      <GiWallet />
                      <span>manage items</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/managebooking">
                      <FaShoppingCart />
                      <span>Manage bookings</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/allusers">
                      <MdReviews />
                      <span>all users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/customers-loyalty">
                      <FaUsersCog />
                      <span>customers & loyalty</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/staff">
                      <FaClipboardList />
                      <span>staff & shifts</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/delivery">
                      <FaMotorcycle />
                      <span>delivery</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/intelligence">
                      <FaBell />
                      <span>intelligence</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/reports">
                      <GiWallet />
                      <span>reports & exports</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={style} to="/dashboard/platform">
                      <MdOutlineAdminPanelSettings />
                      <span>platform admin</span>
                    </NavLink>
                  </li>
                </>
              </>
            ) : (
              <>
                <li>
                  <NavLink className={style} to="/dashboard/userhome">
                    <AiFillHome />
                    <span>User Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/profile">
                    <FaUsersCog />
                    <span>Profile & favorites</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/reservation">
                    <FaCalendarAlt />
                    <span>Reservation</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/history">
                    <GiWallet />
                    <span>Payment History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/cart">
                    <FaShoppingCart />
                    <span>My Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/review">
                    <MdReviews />
                    <span>Add Review</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style} to="/dashboard/booking">
                    <BsFillCalendarWeekFill />
                    <span>My Booking</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
