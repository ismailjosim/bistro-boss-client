import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer>
			<div className='flex lg:flex-row flex-col'>
				<div className='hover:bg-[#1F2937] bg-[#111827] duration-200 ease-in-out transition-all text-white lg:w-1/2 md:w-1/2 w-full p-10 lg:text-end md:text-end text-center'>
					<h3 className='text-3xl mb-5'>Contact us</h3>
					<p>123 ABS Street, Uni 21, Bangladesh</p>
					<p>+88 123456789</p>
					<p>Mon - Fri: 08:00 - 22:00</p>
					<p>Sat - Sun: 10:00 - 23:00</p>
				</div>
				<div className='hover:bg-[#1F2937] bg-[#111827] duration-200 ease-in-out transition-all text-white lg:w-1/2 md:w-1/2 w-full p-10 lg:text-end md:text-end text-center'>
					<h3 className='text-3xl'>Follow US</h3>
					<p className='my-5'>Join us on social media</p>
					<div className='flex lg:justify-start md:justify-start justify-center gap-5 text-2xl'>
						<span className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'>
							<FaFacebookF />
						</span>
						<span className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'>
							<FaInstagram />
						</span>
						<span className='bg-primary w-8 h-8 rounded-full flex justify-center items-center'>
							<FaTwitter />
						</span>
					</div>
				</div>
			</div>
			<div className='bg-[#151515] text-white text-center py-5'>
				<p>Copyright © CulinaryCloud. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
