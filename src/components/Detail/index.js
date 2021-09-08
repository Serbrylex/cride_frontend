import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Context } from '../../Context'

import img from '../../assets/astronauta.jpg' 

import { 
	PageContainer, HeaderDescription, Feed, HeaderDescriptionInfo, ImgBackground, 
	InfoContainer, DivCircle, DivCircleGeneral, About, ImgCircle, Button,
	ListContainer
} from './styles'

import { RideMiniDetail } from '../RideMiniDetail'
import { AiOutlineCheck } from 'react-icons/ai' 

export const Detail = ({ about, is_limited, is_public, members_limit, name, picture, rides_offered, rides_taken, slug_name = '', verified }) => {

	const { token, username } = useContext(Context)
	const [rates, setRides] = useState({
		count: 0,
		next: null,
		previous: null,
		results: [{ 
			arrival_date: "",
			arrival_location: "",
			available_seats: 0,
			comments: "",
			created: "",
			departure_date: "",
			departure_location: "",
			id: 0,
			is_active: true,
			modified: "",			
			offered_by: {
				email: "",
				first_name: "",
				last_name: "",
				phone_number: "",
				profile: {
					biography: "",
					picture: "",
					reputation: 0,
					rides_offered: 0,
					rides_taken: 0
				},
				username: "",
			},
			offered_in: "",
			passengers: [],
			rating: 0,
			slug_name: ""		
		}]
	})

	useEffect( () => {		
		if (slug_name != '') {	
			let strToken = 'Token ' + token 			
			const url = `http://localhost:8000/circles/${slug_name}/rides/`
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': strToken
				}
			})
			  .then(json => json.json())
			  .then(data => {
			  	setRides(data)
			  })
			  .catch(error => {
			  	console.log('An error has ocurred ', error)
			  })
		}
	}, [slug_name])

	const offeredRide = () => {
		console.log({
			username: username,
			slug_name: slug_name
		})
		window.location=`/circles/create/ride/${slug_name}`
		
	}

	return (
		<PageContainer>
			<HeaderDescription>
				<HeaderDescriptionInfo>	
					<ImgBackground src={img} alt={slug_name} />
					<Button onClick={() => offeredRide()}>Ofrecer un ride</Button>
					<InfoContainer>
						<DivCircle>			
							<ImgCircle src={picture} alt={slug_name} />
							<h1>{name} {verified && <AiOutlineCheck size="17px" />}</h1>
							<small>{slug_name}</small>						
						</DivCircle>
						<DivCircleGeneral>
							<p>is_limited: {is_limited && <AiOutlineCheck size="17px" />}</p>
							<p>is_public: {is_public && <AiOutlineCheck size="17px" />}</p>
							<p>members_limit: {members_limit}</p>
							<p>rides_offered: {rides_offered}</p>
							<p>rides_taken: {rides_taken}</p>
						</DivCircleGeneral>
					</InfoContainer>
				</HeaderDescriptionInfo>
				<About>
					{about}
				</About>
			</HeaderDescription>
			<Feed> 
				<ListContainer>
				{
					rates.results.length > 0 && 			
						rates.results.map(item => 
							<RideMiniDetail key={item.id} {...item} slug_name={slug_name}/>
						)
				}
				</ListContainer>
			</Feed>
		</PageContainer>
	)
}