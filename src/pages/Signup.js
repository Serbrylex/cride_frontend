import React, { useContext } from 'react'

import { SignupContainer } from '../components/SignupContainer'
import { Layout } from '../components/Layout'

import { Context } from '../Context' 

// http://localhost:8000/users/verify/ token=kajflakjdflasdkjf

export const Signup = () => {

	const { activateAuth } = useContext(Context)

	const handleSignup = (props) => {

		let inputData = {
			...props
		}	

		console.log(inputData)		
				
		fetch('http://localhost:8000/users/signup/', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputData)
		})
		  .then(json => {
		  	console.log('json', json)
		  	return json.json()
		  })
		  .then(data => {
		  	console.log('pase')
		  	console.log('data', data)
		  	activateAuth(data) 	 
		  	window.location='/circles' 	
		  })
		  .catch(error => {
		  	console.log('An error have ocurred ', error)
		  })		
	}

	const onSubmitSignup = ({ email, password, password_confirmation, username, phone_number, first_name, last_name }) => {
		const inputData = { 
			email: email, 
			password: password, 
			password_confirmation: password_confirmation, 
			username: username, 
			phone_number: phone_number, 
			first_name: first_name, 
			last_name: last_name 
		}

		console.log(inputData)
		handleSignup(inputData)		
	}

	return (
		<Layout title='Login de Comparte Ride' subtitle='Aquí te puedes registrar y darle la vuela al hoy no circula'>			
			<SignupContainer onSubmit={onSubmitSignup} />	
		</Layout>		
	)
}