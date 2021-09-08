import React, { Fragment } from 'react'

import { Form, Input, Button, DivHR, DivLine, DivExistingAccount, Link } from './styles'

import { AiFillFacebook } from "react-icons/ai";

import { useInputValue } from '../../hooks/useInputValue'

export const LoginForm = ({ onSubmit }) => {	

	const email = useInputValue('') 
	const password = useInputValue('')

	const handleSubmit = event => {  
		event.preventDefault()
		onSubmit({ 
			email: email.value, 
			password: password.value  
		})
	}

	let disabled = false

	return (
		<Fragment>
			<Form disabled={disabled} onSubmit={handleSubmit}>				
				<Input disabled={disabled} type="email" placeholder="Email" {...email} />
				<Input disabled={disabled} type="password" placeholder="Password" {...password} />
				<Button disabled={disabled} type="submit">Login</Button>
			</Form>
			<DivHR> 
				<DivLine></DivLine>
				<div>o</div> 
				<DivLine></DivLine>
			</DivHR>
			<DivExistingAccount>
				<Link to='https://www.facebook.com/'>
					<AiFillFacebook size='27px' /> <p>Iniciar sesión con Facebook</p>
				</Link>
				<Link to='/signup'>
					<p>¿Olvidaste tu contraseña?</p>
				</Link>
			</DivExistingAccount>
		</Fragment>
	)
}