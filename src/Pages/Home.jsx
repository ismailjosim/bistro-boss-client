<<<<<<< HEAD
import React, { useState } from 'react';
import Slider from '../components/Home/Slider';
=======
import Slider from '../components/Home/Slider'
>>>>>>> 238f3646e0f7c316bdf0f3b8e05ac17a2fc8693b

import '../CSS/custom.css'

import Categories from '../components/Home/Categories'
import CallToAction from '../components/Home/CTA'
import Menu from '../components/Home/Menu'
import Info from '../components/Home/Info'
import ChefsChoice from '../components/Home/ChefsChoice'
import About from '../components/Home/About'

const Home = () => {
	return (
		<main>
			<Slider />
			<Categories />
			<Info />
			<Menu />
			<CallToAction />
			<ChefsChoice />
			<About />
		</main>
	)
}

export default Home
