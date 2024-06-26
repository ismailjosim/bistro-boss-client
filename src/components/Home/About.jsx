import React from 'react'
import aboutImage from '../../assets/home/featured.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'
const About = () => {
	return (
		<div
			className='hero min-h-screen'
			style={{ backgroundImage: `url(${aboutImage})` }}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
				<div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
					<div className='relative h-40 overflow-hidden sm:h-80 lg:h-full'>
						<img
							alt=''
							src={aboutImage}
							className='absolute inset-0 h-full w-full object-cover'
						/>
					</div>
					<div className='p-8 md:p-12 lg:px-16 lg:py-24'>
						<div className='max-w-lg text-left text-white'>
							<h2 className='text-2xl font-bold text-white sm:text-3xl md:text-5xl'>
								About Us
							</h2>
							<p className='max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed'>
								After serving so many customers, today we can proudly say that
								our shop, JS Design, situated at , is home to a wide range of
								sweets that cater to the diverse taste buds of every patron. All
								of our delicacies are made using unique recipes that will leave
								a memorable aftertaste in your mouth. You can call for sweets in
								times of sudden sweet cravings or when you wish to complete a
								meal with a delightful dessert.
							</p>
							<div className='mt-4 sm:mt-8'>
								<button className='btn btn-primary text-white flex gap-1 font-bold'>
									<span className='text-sm font-medium'>Learn More</span>
									<AiOutlineArrowRight />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
