import { TbChefHat, TbTruckDelivery } from 'react-icons/tb'
import { BsFillCartFill, BsStarFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { GiWallet } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'

import PieChart from '../../../components/admin/PieChart'
import useAuth from '../../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

const AdminHome = () => {
	// background: linear - gradient(90deg, #BB34F5 0 %, #FCDBFF 100 %);
	const { user, loading } = useAuth()
	const [axiosSecure] = useAxiosSecure()

	const { data: stats = [] } = useQuery(['carts', user?.email], {
		queryFn: async () => {
			if (!loading && user?.email) {
				const res = await axiosSecure(`/admin-stats?email`)
				return res.data
			}
		},
		enabled: !loading && !!user?.email, // Enable the query only when not loading and user email is available
		// enabled: !!user?.email && !!localStorage.getItem("tokenName"),
	})

	return (
		<section>
			<h3 className='text-3xl font-semibold font-cinzel text-center md:text-left'>
				Hi, Welcome Back!
			</h3>
			<div className='grid lg:grid-cols-4 grid-cols-2 mt-5 mx-auto gap-4 text-white'>
				<div
					className='rounded-lg p-5 flex justify-center items-center gap-5'
					style={{
						backgroundImage: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)',
					}}
				>
					<div>
						<GiWallet size={60}></GiWallet>
					</div>
					<div>
						<p className='text-4xl font-bold'>{stats && stats.revenue}</p>
						<h2 className='text-2xl capitalize'>Revenue</h2>
					</div>
				</div>
				<div
					className='rounded-lg p-5 flex justify-center items-center gap-5'
					style={{
						backgroundImage: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)',
					}}
				>
					<div>
						<IoIosPeople size={60} />
					</div>
					<div>
						<p className='text-4xl font-bold'>{stats && stats.customers}</p>
						<h2 className='text-2xl capitalize'>Customers</h2>
					</div>
				</div>
				<div
					className='rounded-lg p-5 flex justify-center items-center gap-5'
					style={{
						backgroundImage: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)',
					}}
				>
					<div>
						<TbChefHat size={60} />
					</div>
					<div>
						<p className='text-4xl font-bold'>{stats && stats.products}</p>
						<h2 className='text-2xl capitalize'>Products</h2>
					</div>
				</div>
				<div
					className='rounded-lg p-5 flex justify-center items-center gap-5'
					style={{
						backgroundImage: 'linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)',
					}}
				>
					<div>
						<TbTruckDelivery size={60} />
					</div>
					<div>
						<p className='text-4xl font-bold'>{stats && stats.orders}</p>
						<h2 className='text-2xl capitalize'>Orders</h2>
					</div>
				</div>
			</div>
			<PieChart />
			<div className='mt-5 grid lg:grid-cols-2'>
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
	)
}

export default AdminHome
