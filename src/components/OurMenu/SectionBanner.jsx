const SectionBanner = ({ bannerImg, primary, secondary }) => {
	return (
		<div
			className='hero h-[50vh]'
			style={{ backgroundImage: `url(${bannerImg})` }}
		>
			<div className='hero-overlay bg-opacity-20'></div>
			<div className='lg:w-1/2 w-full text-center mx-auto bg-black/50  text-white py-12'>
				<h2 className='text-2xl font-bold sm:text-3xl md:text-5xl font-cinzel'>
					{primary}
				</h2>
				<p className='lg:mx-20 md:mx-10 mx-5 text-sm mt-2'>{secondary}</p>
			</div>
		</div>
	)
}

export default SectionBanner
