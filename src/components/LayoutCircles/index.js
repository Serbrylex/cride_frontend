import React, { useState } from 'react'

import { Div, Container } from './styles'

import { NavUserInformation } from '../NavUserInformation'
import { CirclesList } from '../CirclesList'


export const LayoutCircles = () => {

	const [displayView, setDisplayView] = useState(false)

	return (	
		<Container> 			
			<NavUserInformation displayView={displayView} setDisplayView={setDisplayView} />			
			<Div displayView={displayView}>
				<CirclesList displayView={displayView} setDisplayView={setDisplayView} />				
			</Div>		
		</Container>				
	)
}