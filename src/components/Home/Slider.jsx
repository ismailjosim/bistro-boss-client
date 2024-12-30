import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { FaShoppingCart } from 'react-icons/fa'
const Slider = () => {
	const [slideData, setSlideData] = useState([])

	useEffect(() => {
		fetch('slideData.json')
			.then((res) => res.json())
			.then((data) => setSlideData(data))
	}, [])

	return (
		<Carousel
			autoPlay
			showArrows={false}
			stopOnHover={true}
			transitionTime={1000}
			infiniteLoop
			interval={5000}
		>
			{slideData &&
				slideData.map((item, index) => {
					const { title, thumbnail } = item
					return (
						<div
							key={index}
							style={{
								backgroundImage: `url(${thumbnail})`,
								backgroundSize: 'cover',
								maxHeight: '90vh',
								height: 'calc(90vh - 4rem)',
								backgroundPosition: 'center center',
								backgroundRepeat: 'no-repeat',
								backgroundAttachment: 'fixed',
							}}
							className='relative bg-no-repeat'
						>
							<div className='absolute inset-0 bg-slate-900/30 sm:bg-gradient-to-r sm:from-black/75 sm:to-secondary/25'></div>
							<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8'>
								<div className='max-w-xl text-center sm:text-left text-white'>
									<h1 className='text-3xl font-extrabold sm:text-5xl flex flex-col gap-3'>
										<span>{title}</span>
									</h1>
									<p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed'>
										Gets your taste buds a jolt of sweetness. Taste our candy
										and fall in love. The candy store that will make you want
										more. Serving all the candies in town since 2020.
									</p>
									<div className='mt-8 flex justify-center lg:justify-start md:justify-start flex-wrap gap-4 text-center'>
										<button className='btn btn-secondary text-white hover:btn-primary active:btn-primary hover:text-white'>
											Get Started
										</button>
										<button className='btn btn-primary text-white flex gap-1'>
											<span>Order Now</span>{' '}
											<FaShoppingCart className='text-xl' />
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
		</Carousel>
	)
}

export default Slider
