import React from 'react'
import { AiFillCloseSquare, AiFillHome } from 'react-icons/ai'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaCalendarAlt, FaShoppingCart } from 'react-icons/fa'
import { GiWallet } from 'react-icons/gi'
import { MdReviews } from 'react-icons/md'
import { ImMenu } from 'react-icons/im'
import { Link, NavLink, Outlet } from 'react-router-dom'
import '../CSS/custom.css'
import useAdmin from '../Hooks/useAdmin'

const Dashboard = () => {
	const style =
		'hover:btn-secondary rounded-md hover:text-white active:bg-secondary active:text-white uppercase font-medium w-full'

	// TODO: load data from the server to hanve dynamic isAdmin based on data.
	// const isAdmin = true;
	const [isAdmin] = useAdmin()

	return (
		<div>
			<div className='drawer drawer-mobile'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle ' />
				<div className='drawer-content mt-5 mx-5'>
					<Outlet />
				</div>

				<label
					htmlFor='my-drawer-2'
					className='absolute top-2 -left-2 text-2xl bg-primary pl-5 p-2 rounded-md text-white'
				>
					<ImMenu></ImMenu>
				</label>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-2' className='drawer-overlay'></label>

					<ul className='menu p-4 bg-primary text-black dashboard-layout pt-10'>
						<Link to='/' className='flex flex-col justify-center'>
							<span className='font-cinzel font-black md:text-2xl text-lg lg:text-3xl'>
								BISTRO BOSS
							</span>
							<span className='font-cinzel hidden lg:inline md:inline md:tracking-widest lg:tracking-[.5rem] font-semibold text-2xl'>
								Restaurant
							</span>
						</Link>
						<label
							htmlFor='my-drawer-2'
							className='absolute top-8 right-2 text-4xl lg:hidden md:hidden bg-primary rounded-md text-black'
						>
							<AiFillCloseSquare></AiFillCloseSquare>
						</label>
						<span className='mt-10'></span>
						{isAdmin ? (
							<>
								<>
									<li>
										<NavLink className={style} to='/dashboard/adminhome'>
											<AiFillHome />
											<span>Admin Home</span>
										</NavLink>
									</li>
									<li>
										<NavLink className={style} to='/dashboard/additems'>
											<FaCalendarAlt />
											<span>add items</span>
										</NavLink>
									</li>
									<li>
										<NavLink className={style} to='/dashboard/manageitems'>
											<GiWallet />
											<span>manage items</span>
										</NavLink>
									</li>
									<li>
										<NavLink className={style} to='/dashboard/managebooking'>
											<FaShoppingCart />
											<span>Manage bookings</span>
										</NavLink>
									</li>
									<li>
										<NavLink className={style} to='/dashboard/allusers'>
											<MdReviews />
											<span>all users</span>
										</NavLink>
									</li>
								</>
							</>
						) : (
							<>
								<li>
									<NavLink className={style} to='/dashboard/userhome'>
										<AiFillHome />
										<span>User Home</span>
									</NavLink>
								</li>
								<li>
									<NavLink className={style} to='/dashboard/reservation'>
										<FaCalendarAlt />
										<span>Reservation</span>
									</NavLink>
								</li>
								<li>
									<NavLink className={style} to='/dashboard/history'>
										<GiWallet />
										<span>Payment History</span>
									</NavLink>
								</li>
								<li>
									<NavLink className={style} to='/dashboard/cart'>
										<FaShoppingCart />
										<span>My Cart</span>
									</NavLink>
								</li>
								<li>
									<NavLink className={style} to='/dashboard/review'>
										<MdReviews />
										<span>Add Review</span>
									</NavLink>
								</li>
								<li>
									<NavLink className={style} to='/dashboard/booking'>
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
	)
}

export default Dashboard
