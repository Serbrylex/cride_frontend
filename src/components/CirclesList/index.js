import React, { useContext, useState, useEffect, Fragment, useMemo } from 'react'
import { Context } from '../../Context'

import { NavBarCirclesSearch } from '../NavBarCirclesSearch'

import { 
	Div, 
	List, 
	CircleElement, 
	Img, 
	AboutDiv, 
	TopCircleInformation, 
	TopCircleInformationOptional, 
	BottomCircleInformation,
	Description,
	TopCircleInformationLinks,
	RidesDiv,
	Link
} from './styles'

import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

import { useSearchCircles } from '../../hooks/useSearchCircles'


export const CirclesList = ({ displayView, setDisplayView }) => {

	const { token } = useContext(Context)
	const [circles, setCircles] = useState({
		count: 0,
    	next: "",
    	previous: null,
    	results: []
	})	
	useEffect( () => {			
		let strToken = 'Token ' + token 		
		fetch('http://localhost:8000/circles/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': strToken
			}
		})
		  .then(json => json.json())
		  .then(data => {
		  	setCircles(data)
		  })
		  .catch(error => error)
	}, [])
	const { query, setQuery, filteredCircles } = useSearchCircles(circles.results)

	//const circlesList = filteredCircles.slice(0)

	const aparece = () => {
		setDisplayView(!displayView)
	}
	
	const handleSubmit = event => {  
		event.preventDefault()
	}

	return (
		<Fragment>
			<NavBarCirclesSearch displayView={displayView} setDisplayView={setDisplayView} query={query} />			
			<Div>
				<List>
				{
					filteredCircles.length > 0 && 			
						filteredCircles.map(item => 
							<CircleElement key={item.name}>
								<TopCircleInformation>
									<TopCircleInformationLinks>
										<Img src={item.picture} alt="" />
										<Link to={`/circles/detail/${item.slug_name}`}>
											<h4>{item.name}</h4>
										</Link>
									</TopCircleInformationLinks>
									<TopCircleInformationOptional>
										{
											item.is_limited &&		
											<div>
												<p>Limit: </p>
												<small>{item.members_limit}</small>											
											</div>						
										}
										{
											item.verified ?
											<AiFillCheckCircle size="27px" />
											:
											<AiFillCloseCircle size="27px" />
										}
									</TopCircleInformationOptional>
								</TopCircleInformation>
								<BottomCircleInformation>
									<AboutDiv>
									    <h4>About</h4>
										<Description>{item.about}</Description>
									</AboutDiv>
									<RidesDiv>
									    <div>
											<p>Rides offered: {item.rides_offered}</p>
											<hr />
						            		<p>Rides takan: {item.rides_taken}</p>		
					            		</div>
									</RidesDiv>
								</BottomCircleInformation>													            					            					          
							</CircleElement>
						)				
				}
				</List>				
			</Div>
		</Fragment>
	)
}