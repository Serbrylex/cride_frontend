import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Context } from '../../Context'

import { useStars } from '../../hooks/useStars'
import { AiFillCar } from 'react-icons/ai' 

import { 
	Container, Link, Img, RideLink, Div, DivInternLeft, DivInternRight, 
	Description, Passengers, ListUl, ListElement, ButtonX, ButtonPassengers
} from './styles'
 
export const RideMiniDetail = props => {
	const [rate, setRide] = useState({		
		...props		
	})	
	const [click, setClick] = useState(false)

	return (
		<Container>
			<Div>
				<DivInternLeft>
					<Description>Join To The Ride:</Description>
					{useStars(rate.rating, 17)}										
				</DivInternLeft>
				<RideLink>
					<Link to={`/circles/ride/${rate.slug_name}/${rate.id}`} >
						<Description>Ride Detail:</Description>
						<AiFillCar size="17px" />
					</Link>
				</RideLink>
			</Div>
			<Div>
				<h3>Offered In: {rate.offered_in}</h3>				
			</Div>
			<Div>
				<DivInternLeft>
					<Link to={`/user/${rate.offered_by.username}`}>
						<Img src={rate.offered_by.profile.picture} alt="" />
						<h3>Offered By: {rate.offered_by.username}</h3>																				
					</Link>
				</DivInternLeft>
				<DivInternRight>
					<Description>Rating User:</Description>
					{useStars(rate.offered_by.profile.reputation, 17)}										
				</DivInternRight>
			</Div>
			<Div>
				<h4>From: {rate.departure_location}</h4>				
			</Div>
			<Div>
				<h4>To: {rate.arrival_location}</h4>
			</Div>
			<Div>
				<p>Departure date: {rate.departure_date}</p>
			</Div>
			<Div>
				<p>Arrival date: {rate.arrival_date}</p>
			</Div>
			<Div>
				<p>Comments: {rate.comments}</p>
			</Div>
			<Div>
				<p>Avaliable Seats: {rate.available_seats}</p>
				<ButtonPassengers disabled={click} onClick={() => { setClick(true) }}>Passengers</ButtonPassengers>
			</Div>	

			<Passengers click={click}>
				<ListUl>				
					<ListElement>
						<h3>Passengers</h3>
						<ButtonX onClick={() => { setClick(false) }}>X</ButtonX>
					</ListElement>					
					{
					rate.passengers.length > 0 && 			
						rate.passengers.map(item => 
							<ListElement>		
								{item}
							</ListElement>	
						)
					}										
				</ListUl>
			</Passengers>
		</Container>
	)
}