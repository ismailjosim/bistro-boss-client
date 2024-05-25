import SectionHeading from '../../utils/SectionHeading'
import Loading from '../../utils/Loading'
import MenuCard from './MenuCard'
import FetchError from '../../utils/FetchError'
import useMenu from '../../Hooks/useMenu'

const Menu = () => {
	const [menu, , isError, error, isLoading] = useMenu()

	let content
	if (isLoading) {
		content = (
			<div className='flex justify-center items-center'>
				<Loading />
			</div>
		)
	}

	if (isError) {
		content = <FetchError message={error} />
	}

	if (!isLoading && menu.length === 0) {
		content = <FetchError message={'No Data Found!'} />
	}

	if (!isLoading && menu.length > 0) {
		const popularItems = menu.filter((item) => item.category === 'popular')
		content = (
			<div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
				{popularItems.map((singleItem, index) => (
					<MenuCard key={index} singleItem={singleItem} />
				))}
			</div>
		)
	}

	return (
		<section>
			<SectionHeading primary={'Check it out'} secondary={'OUR Popular MENU'} />

			<div className='my-10 w-11/12 mx-auto'>{content}</div>
			<div className='text-center py-5'>
				<button className='btn btn-primary'>View Full Menu</button>
			</div>
		</section>
	)
}

export default Menu
