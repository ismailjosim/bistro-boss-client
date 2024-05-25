import React from 'react'

const MenuCard = ({ singleItem }) => {
	const { name, image, price, recipe } = singleItem || {}
	return (
		<div className='flex lg:flex-row md:flex-row flex-col gap-5'>
			<img
				className='lg:w-24 md:w-20 w-full hover:scale-110 transition-all duration-500 lg:rounded-custom md:rounded-custom rounded-none'
				src={image}
				alt={name}
			/>
			<div>
				<h3 className='flex justify-between'>
					<span className='uppercase text-xl font-cinzel font-semibold'>
						{name}
					</span>
					<span className='text-primary font-bold'>${price}</span>
				</h3>
				<p>{recipe}</p>
			</div>
		</div>
	)
}

export default MenuCard
