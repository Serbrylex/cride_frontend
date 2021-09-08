import React, { useContext } from 'react'
import { Context } from '../Context'

import { Layout } from '../components/Layout'
import { LoginContainer } from '../components/LoginContainer'


export const Login = () => {

	const { activateAuth } = useContext(Context)

	const handleLogin = ({ email, password }) => {

		let inputData = {
			email: email,
			password: password
		}
				
		fetch('http://localhost:8000/users/login/', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputData)
		})
		  .then(json => json.json())
		  .then(data => {
		  	console.log('data', data)
		  	activateAuth(data) 	  	
		  	window.location='/circles'
		  })
		  .catch(error => {
		  	console.log('An error have ocurred')
		  })		
	}

	const onSubmitSignin = ({ email, password }) => {
						
		let inputData = {
			email: email,
			password: password
		}		
			
		handleLogin(inputData)
	}

	return (
		<Layout title='Login de Comparte Ride' subtitle='Aquí te puedes registrar y darle la vuela al hoy no circula'>			
			<LoginContainer onSubmit={onSubmitSignin}/>	
		</Layout>
	)
}

// Si formcontainer recibe login cambia el aviso de hasta abajo (¿No tienes una cuanta? Registrate)
// si es Signup muestra otra cosa (¿Tienes una cuenta? Inicia sesión)