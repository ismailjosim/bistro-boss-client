import React from 'react'
import imageBg from '../../assets/imagebg.jpg'

const Info = () => {
	return (
		<div
			className='hero w-11/12 mx-auto py-10 my-10'
			style={{ backgroundImage: `url(${imageBg})` }}
		>
			<div className='hero-content text-center'>
				<div className='bg-white lg:py-10 lg:px-20 py-5 lg:w-9/12 w-full mx-auto'>
					<h1 className='mb-5 text-5xl font-normal'>Bistro Boss</h1>
					<p className='mb-5'></p>
					<button className='btn btn-primary'>Get Started</button>
				</div>
			</div>
		</div>
	)
}

export default Info
