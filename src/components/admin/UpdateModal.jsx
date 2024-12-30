import React from 'react'

const UpdateModal = ({ item, id }) => {
	const { _id, image, name, price } = item || {}
	return (
		<>
			<input type='checkbox' id={id} className='modal-toggle' />
			<div className='modal modal-bottom sm:modal-middle'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>{name}</h3>
					<p className='py-4'>
						You've been selected for a chance to get one year of subscription to
						use Wikipedia for free!
					</p>
					<div className='modal-action'>
						<label htmlFor={id} className='btn'>
							Yay!
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default UpdateModal
