import React, { useState, useContext } from 'react'
import { Context } from '../../Context' 

import { NavUserInformation } from '../NavUserInformation'
import { NavBarCirclesSearch } from '../NavBarCirclesSearch'
import { Detail } from '../Detail'

import { Div, Container } from './styles'

// { about, is_limited, is_public, members_limit, name, picture, rides_offered, rides_taken,slug_name, verified }
export const DetailContainer = props => {

	const [displayView, setDisplayView] = useState(false)
	//const { query, setQuery, filteredCircles } = useSearchCircles(circles.results)
	const [query, setQuery] = useState('')	

	return (
		<Container>  	 		
			<NavUserInformation displayView={displayView} setDisplayView={setDisplayView} />			
			<Div displayView={displayView}>
				<NavBarCirclesSearch displayView={displayView} setDisplayView={setDisplayView} query={query} setQuery={setQuery} />
				<Detail {...props} />				
			</Div>		
		</Container>
	)
}