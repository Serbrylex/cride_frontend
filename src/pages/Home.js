import React, { Fragment } from 'react'

import { NavBar } from '../components/NavBar'
import { HomeContent } from '../components/HomeContent'
import { LayoutHome } from '../components/LayoutHome'


export const Home = () => {
	console.log('2')
	return (
		<LayoutHome title='Comparte Ride' subtitle='Con Comparte Ride dale la vuelta al hoy no circula'>			
			<NavBar isRegister={false} />
			<HomeContent /> 			
		</LayoutHome>
	)
}

/*export default React.memo(HomePage, (prevProps, props) => {
	return prevProps.id === props.id
})
*/ 