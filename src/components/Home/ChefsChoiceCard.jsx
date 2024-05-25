import React from 'react'
import image from '../../assets/shop/banner2.jpg'

const ChefsChoiceCard = () => {
	return (
		<div className='card w-full rounded-none bg-base-100 shadow-md'>
			<figure>
				<img src={image} alt='Shoes' />
			</figure>
			<div className='card-body text-center'>
				<h2 className='text-2xl font-semibold'>Caeser Salad</h2>
				<p className='text-base'>
					Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
				</p>
				<div className='mt-5'>
					<button className='btn btn-primary btn-outline rounded-md'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChefsChoiceCard
