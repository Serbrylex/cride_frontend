import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../Context'

import {  
	Nav, Section, Img, UserData, SectionTitle, HamburferContaier, Link, 
	SectionTop, Mouse, UserExtraReference, UserReference, SectionUserData, 
	SectionUser, Scroll, LinkUtilities
} from './styles'

import imagen from '../../assets/astronauta.jpg'

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsThreeDots } from 'react-icons/bs' 
import { IoIosAddCircle } from 'react-icons/io' 

export const NavUserInformation = ({ displayView, setDisplayView }) => {

	const { removeAuth, token, username } = useContext(Context)
	const [displayUserInformation, setDisplayUserInformation] = useState(false)
	const [userEffect, setUserEffect] = useState(false)
	const [focus, setFocus] = useState(false)
	const [myCircles, setMyCircles] = useState([{
		slug_name: ""
	}])
	const [userInfo, setUserInfo] = useState({		
		first_name: "",
		last_name: "",
		picture: ""		
	})
		
	useEffect(() => {
		const strToken = 'Token ' + token
		const url =`http://localhost:8000/users/${username}/`
		fetch(url, {
			method: 'GET',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': strToken 
			}
		})
		  .then(json => json.json())
		  .then(data => {		  	
		  	let circlesarray = []
		  	const circlesArrayPure = data.circles
		  	for (let item in circlesArrayPure) {		  		
		  		circlesarray.push({slug_name: circlesArrayPure[item].slug_name})
		  	}		  	
		  	setMyCircles(circlesarray)
		  	const newUserData = {
		  		first_name: data.user.first_name,
				last_name: data.user.last_name,
				picture: data.user.profile.picture
		  	}
		  	setUserInfo(newUserData)
		  })
		  .catch(error => {
		  	console.log('An error have ocurred: ', error)
		  })
	}, [])


	const closeSession = () => { 
		removeAuth()
		window.location='/login'
	}	

	const desapere = () => {
		setDisplayView(!displayView)		
	}
 
	// http http://localhost:8000/circles/Nohay/rides/ "Authorization:Token 7866771409b9960a34e6da7c03bbcc20343a3374"
	// http://localhost:8000/users/${username}/circles/

	// http://localhost:8000/circles/slug_name/rides/(?P<pk>[^/.]+)/join/

	// MIs circulos y user information:  http://localhost:8000/users/${username}/
	return (
		<Nav displayView={displayView}>			
			<SectionTop>
				<HamburferContaier>
					<Mouse onClick={desapere}>
						<GiHamburgerMenu size="27px" />
					</Mouse>
					<Link to="/home">
						<h1>Comparte Ride</h1>
					</Link>
				</HamburferContaier>
			</SectionTop>
			<UserExtraReference displayView={displayUserInformation}>
				<UserData>
					{userInfo.picture &&
						<Img src={userInfo.picture} alt="" />					
					}
					{!userInfo.picture &&
						<Img src={imagen} alt="" />					
					}
					<Link to={`/user/${username}`}>
						<UserReference>
							<p>{userInfo.first_name} Last...</p>
							<p>{username}</p>
						</UserReference>
					</Link>	
				</UserData>									
				<Mouse onClick={closeSession}>Cerrar sesión</Mouse>				
			</UserExtraReference>
			<SectionUser>
				<SectionUserData 
					effect={userEffect} 
					onMouseOver={() => setUserEffect(true)} 
					onMouseOut={() => setUserEffect(false)}
					onClick={() => setDisplayUserInformation(!displayUserInformation)}
				>
					{userInfo.picture &&
						<Img src={userInfo.picture} alt="" />					
					}
					{!userInfo.picture &&
						<Img src={imagen} alt="" />					
					}
					<UserReference>
						<p>{userInfo.first_name} Last...</p>
						<p>{username}</p>
					</UserReference>				
					<Mouse>
						<BsThreeDots size="27px" />
					</Mouse>			
				</SectionUserData>								
			</SectionUser>
			<Scroll 
				focus={focus}
				onMouseOver={() => setFocus(true)} 
				onMouseOut={() => setFocus(false)}
			>
				<Section>
					<LinkUtilities to='/circles'>
						<IoIosAddCircle size="27px" /> Circles List
					</LinkUtilities>
					<LinkUtilities to='/circles/create'>
						<IoIosAddCircle size="27px" /> Add New Circles
					</LinkUtilities>
					<LinkUtilities to='/circles/Rides/Feed'>
						<IoIosAddCircle size="27px" /> Rides Feed
					</LinkUtilities>
				</Section>
				<Section>
					<SectionTitle>Mis Circulos</SectionTitle>
					<ul>
						{myCircles.map(item => 
							<li key={item.slug_name}>
								<Link to={`/circles/detail/${item.slug_name}`}>
									{item.slug_name}
								</Link>
							</li>
						)}
					</ul>
				</Section>
				<Section>
					<SectionTitle>Rides solicitando o esperando</SectionTitle>
					<ul>
						<li>
							Some ride that i'm waiting for
						</li>
						<li>
							Some ride that i'm waiting for
						</li>
					</ul>
				</Section>
				<Section>
					<SectionTitle>Rides ofrecidos</SectionTitle>
					<ul>
						<li>
							Some ride offered by me
						</li>
						<li>
							Some ride offered by me
						</li>
					</ul>
				</Section>
				<Section>
					<SectionTitle>Rides ofrecidos</SectionTitle>
					<ul>
						<li>
							Some ride offered by me
						</li>
						<li>
							Some ride offered by me
						</li>
					</ul>
				</Section>
				<Section>
					<SectionTitle>Rides ofrecidos</SectionTitle>
					<ul>
						<li>
							Some ride offered by me
						</li>
						<li>
							Some ride offered by me
						</li>
					</ul>
				</Section>
			</Scroll>	
		</Nav>
	)
}