import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Root = () => {
	const location = useLocation()

	const noHeaderFooter =
		location.pathname.includes('login') ||
		location.pathname.includes('register')

	return (
		<>
			{noHeaderFooter || <Header />}
			<Outlet />
			{noHeaderFooter || <Footer />}
		</>
	)
}

export default Root
