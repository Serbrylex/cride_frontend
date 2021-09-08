import React, { useState } from 'react'

import { Div, Container } from './styles'

import { NavUserInformation } from '../NavUserInformation'
import { NavBarCirclesSearch } from '../NavBarCirclesSearch'
import { RidesForm } from '../RidesForm'
/*
	offered_by
	offered_in
	available_seats
	comments
	departure_location
	departure_date
	arrival_location
	arrival_date
	rating
	is_active
*/

export const RidesFormLayout = props => {

	const [displayView, setDisplayView] = useState(false)
	const [query, setQuery] = useState('')
	
	return (	
		<Container> 			
			<NavUserInformation displayView={displayView} setDisplayView={setDisplayView} />			
			<Div displayView={displayView}>
				<NavBarCirclesSearch displayView={displayView} setDisplayView={setDisplayView} query={query} setQuery={setQuery} />
				<RidesForm displayView={displayView} setDisplayView={setDisplayView} {...props} />				
			</Div>		
		</Container>				 
	)
}