import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Context'

import { Layout } from '../components/Layout' 

import { DetailContainer } from '../components/DetailContainer'

export const CircleDetail = ({ slug_name }) => {

	const { token } = useContext(Context)
	const [circle, setCircle] = useState({
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
	})	
	useEffect( () => {			
		let strToken = 'Token ' + token 
		console.log('token', strToken)		
		const url = `http://localhost:8000/circles/${slug_name}/`
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': strToken
			}
		})
		  .then(json => json.json())
		  .then(data => {
		  	setCircle(data)		  
		  	console.log('data', data)
		  })
		  .catch(error => {
		  	console.log('An error has ocurred: ', error)
		  })
	}, [])

	return (
		<Layout title={slug_name} subtitle={`Descripcion del circulo ${slug_name}`}>		
			<DetailContainer {...circle} />
		</Layout>
	)
}