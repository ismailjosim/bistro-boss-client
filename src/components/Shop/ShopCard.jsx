import { BsCurrencyDollar } from 'react-icons/bs'
import toast from 'react-hot-toast'
import useCart from '../../Hooks/useCart'
import useAuth from '../../Hooks/useAuth'

const ShopCard = ({ item }) => {
	const { category, image, name, price, recipe } = item || {}

	const { user } = useAuth()
	const { refetch } = useCart()

	const handleAddToCart = (data) => {
		if (user && user.email) {
			const itemInfo = {
				itemId: data._id,
				name,
				image,
				category,
				price,
				userName: user.displayName,
				userEmail: user.email,
			}
			fetch(`${process.env.REACT_APP_SERVER_URL}/carts`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(itemInfo),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						toast.success('Product Added Successfully ✅')
						refetch() // refetch useCart
					}
				})
		} else {
			alert('You Need To Login First')
		}
	}

	return (
		<div className='relative block overflow-hidden group rounded-md'>
			<button className='absolute hover:bg-secondary hover:text-white z-[1] right-4 top-4 bg-black transition-all duration-500 ease-in-out px-3 py-2 rounded-md font-semibold uppercase text-primary'>
				<span>{category}</span>
			</button>
			<img
				src={image}
				alt=''
				className='object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72'
			/>
			<div className='relative p-6 bg-white border border-gray-100'>
				<div className='flex justify-between'>
					<span className='whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium'>
						New
					</span>
					<span className='flex items-center justify-center rounded-full  text-base font-semibold bg-secondary text-white px-2'>
						<BsCurrencyDollar />
						<p className='whitespace-nowrap'>{price}</p>
					</span>
				</div>
				<h3 className='mt-4 text-lg font-medium text-gray-900'>{name}</h3>
				<p className='mt-1.5 font-light'>
					{recipe.slice(0, 100)}...
					<span className='font-semibold text-primary'>Read More</span>
				</p>
				<button
					className='btn btn-primary w-full text-sm font-medium transition text-white rounded hover:scale-105 mt-5'
					onClick={() => handleAddToCart(item)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default ShopCard
