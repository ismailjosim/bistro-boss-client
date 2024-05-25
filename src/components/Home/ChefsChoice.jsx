import React from 'react'
import SectionHeading from '../../utils/SectionHeading'
import ChefsChoiceCard from './ChefsChoiceCard'

const ChefsChoice = () => {
	return (
		<section className='w-11/12 mx-auto'>
			<SectionHeading primary={'Should Try'} secondary={'CHEF RECOMMENDS'} />
			<div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
				{[0, 1, 3].map((item, index) => (
					<ChefsChoiceCard item={item} key={index} />
				))}
			</div>
		</section>
	)
}

export default ChefsChoice
