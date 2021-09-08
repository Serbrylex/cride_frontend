import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../Context'

import { Layout } from '../components/Layout'
import { ProfileContainer } from '../components/ProfileContainer'

export const UserProfile = ({ usernameto }) => {
	const { token, username } = useContext(Context)
	const [userData, setUserData] = useState({
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
			phone_number: "",
			profile: {
				biography: "",
				picture: "",
				reputation: 0,
				rides_offered: 0,
				rides_taken: 0
			},			
			username: ""
		}
	})

	useEffect(() => {
		let strToken = 'Token ' + token 
		const url = `http://localhost:8000/users/${usernameto}/`
		fetch(url, {
			method: 'GET',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': strToken
			}
		})
		  .then(json => json.json())
		  .then(data => {
		  	setUserData(data)	
		  	console.log(data)	  	
		  })
		  .catch(error => {
		  	console.log('An error have ocurred ', error)
		  })	
	}, [])

	return (
		<Layout title={`User: ${usernameto}`} subtitle={`Aquí tienes el profile de ${usernameto}`}>			
			<ProfileContainer {...userData} />
		</Layout>	
	)
}