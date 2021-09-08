import React, { useState, useContext } from 'react'
import { Context } from '../../Context' 

import { NavUserInformation } from '../NavUserInformation'
import { NavBarCirclesSearch } from '../NavBarCirclesSearch'

import { 
	Div, Container, DivContainerPolos, Elements, Img, H1Information, Li,
	CirclesList, Link, SectionsContainer, ListUserInfo, ListCirclesUser, AlignItems

} from './styles'

import { useStars } from '../../hooks/useStars'

import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

import imagenDefault from '../../assets/astronauta.jpg'

export const ProfileContainer = props => {
	const [displayView, setDisplayView] = useState(false)
	//const { query, setQuery, filteredCircles } = useSearchCircles(circles.results)
	const [query, setQuery] = useState('')	

	const { token, username } = useContext(Context)

	/*
		circles: [{
			about: "",
			is_limited: false,
			is_public: false,
			members_limit: 0,
			name: "",
			picture: "",
			rides_offered: 0,
			rides_taken: 0,
			slug_name: "",
			verified: false
		}],
		user: {
			email: "",
			first_name: "",
			last_name: "",
			phone_number: ""
			profile: {
				biography: "",
				picture: "",
				reputation: 0,
				rides_offered: 0,
				rides_taken: 0
			},			
			username: "" 
		}
	*/
	return (
		<Container>  	 		
			<NavUserInformation displayView={displayView} setDisplayView={setDisplayView} />			
			<Div displayView={displayView}>
				<NavBarCirclesSearch displayView={displayView} setDisplayView={setDisplayView} query={query} setQuery={setQuery} />
				<SectionsContainer>
					<DivContainerPolos>
						<Elements>
							<AlignItems>
							    <H1Information>
									<Img src={props.user.profile.picture} alt="" />
									<h1>{props.user.username}</h1>
								</H1Information>
								<ListUserInfo>
									<Li>
										<h2>{props.user.first_name} {props.user.last_name}</h2>
									</Li>
									<Li>
										<p>Reputation: </p>
										{useStars(props.user.profile.reputation, 17)}
									</Li>
									<Li>
										{props.user.profile.biography}
									</Li>
									<Li>
										{props.user.phone_number}
									</Li>
									<Li>
										{props.user.email}
									</Li>
									<Li>Rides Offered: {props.user.profile.rides_offered}</Li>
									<Li>Rides Taken: {props.user.profile.rides_taken}</Li>
									<Li>Phone Number: {props.user.phone_number}</Li>
								</ListUserInfo>
							</AlignItems>
						</Elements>
						<Elements>					
							<CirclesList>
							    <h3>Los circulos de {props.user.username}</h3>
								<ListCirclesUser>
									{props.circles.length > 0 &&
										props.circles.map(item => 																					
											<Li key={item.slug_name}>
												<Link to={`/circles/detail/${item.slug_name}`}>
													{item.picture && 
														<Img src={`http://localhost:8000${item.picture}`} />
													}
													{!item.picture && 
														<Img src={imagenDefault} />
													}
													{item.name}
												</Link>											
												{
													item.verified ?
													<AiFillCheckCircle size="27px" />
													:
													<AiFillCloseCircle size="27px" />
												}
											</Li>								
										)
									}
								</ListCirclesUser>
							</CirclesList>
						</Elements>
					</DivContainerPolos>
				</SectionsContainer>	
			</Div>		
		</Container>
	)
}