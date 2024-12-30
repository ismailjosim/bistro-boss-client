import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const RecipeCard = ({ item }) => {
	const {
		itemName,
		thumbnail,
		rating,
		ingredients,
		cookingMethod,
		cookingLink,
	} = item

	return (
		<div className='block rounded-lg p-4 shadow-sm shadow-indigo-100'>
			<img
				alt={itemName}
				src={thumbnail}
				className='h-56 w-full rounded-md object-cover'
			/>
			<div className='mt-2'>
				<div>
					<dd className='text-sm text-gray-500'>$240,000</dd>
				</div>
				<div>
					<h3 className='font-medium'>{itemName}</h3>
				</div>

				<div className='mt-6'>
					<h3 className='font-semibold mb-2'>RECIPE INGREDIENTS</h3>
					{ingredients.slice(0, 5).map((ingredient, idx) => (
						<p
							key={idx}
							className='flex items-center gap-5 my-2 bg-slate-100 py-1 px-1 rounded-md shadow-md'
						>
							<AiFillCheckCircle className='text-primary text-xl' />
							<span>{ingredient}</span>
						</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
