import React from 'react'
import SectionHeading from '../../utils/SectionHeading'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Categories = () => {
	const data = [
		{
			picture: 'https://i.ibb.co/nQ8xhBp/category08.jpg',
			title: 'Cheeseburger Deluxe',
		},
		{
			picture: 'https://i.ibb.co/zQqqRXM/category07.jpg',
			title: 'Chicken Sandwich',
		},
		{
			picture: 'https://i.ibb.co/Ssc5XRv/category06.jpg',
			title: 'Bacon Burger',
		},
		{
			picture: 'https://i.ibb.co/grVp3T1/category05.jpg',
			title: 'Cheese Fries',
		},
		{
			picture: 'https://i.ibb.co/27fFxWP/category04.jpg',
			title: 'Chicken Nuggets',
		},
		{
			picture: 'https://i.ibb.co/BGwK5VJ/category03.jpg',
			title: 'Caesar Salad',
		},
		{
			picture: 'https://i.ibb.co/qF4zK1w/category02.jpg',
			title: 'Spicy Burger',
		},
		{
			picture: 'https://i.ibb.co/DgBHBdt/category01.jpg',
			title: 'Bacon Cheeseburger',
		},
	]

	const responsiveSettings = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	]

	return (
		<section className='w-11/12 mx-auto'>
			<SectionHeading
				primary={'From 11:00am to 10:00pm'}
				secondary={'ORDER ONLINE'}
			/>
			<div className='my-10'>
				<Slide
					indicators={true}
					arrows={false}
					autoplay={true}
					infinite={true}
					responsive={responsiveSettings}
				>
					{data.map((item, index) => {
						return (
							<div
								key={index}
								style={{
									backgroundImage: `url(${item.picture})`,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
									backgroundSize: 'cover',
									height: '350px',
									margin: '0 1rem',
								}}
							>
								<div className='bg-black/40 text-white py-2 w-full text-center'>
									<h3 className=' text-xl font-medium capitalize'>
										{item.title}
									</h3>
								</div>
							</div>
						)
					})}
				</Slide>
			</div>
		</section>
	)
}

export default Categories
