import React, { Fragment } from 'react'

import { Form, Input, Button } from './styles'

import { useInputValue } from '../../hooks/useInputValue'


export const SignupForm = ({ onSubmit }) => {

	const email = useInputValue('') 
	const password = useInputValue('')
	const password_confirmation = useInputValue('')
	const username = useInputValue('')
	const phone_number = useInputValue('')
	const first_name = useInputValue('')
	const last_name = useInputValue('')

	const handleSubmit = event => {  
		event.preventDefault()
		onSubmit({ 
			email: email.value, 
			password: password.value,			
			password_confirmation: password_confirmation.value,
			username: username.value,
			phone_number: phone_number.value,
			first_name: first_name.value,
			last_name: last_name.value
		})
	}

	let disabled = false

	return (
		<Fragment>
			<Form disabled={disabled} onSubmit={handleSubmit}>				
				<Input disabled={disabled} type="text" placeholder="Username" {...username} />
				<Input disabled={disabled} type="email" placeholder="Email" {...email} />
				<Input disabled={disabled} type="password" placeholder="Password" {...password} />
				<Input disabled={disabled} type="password" placeholder="Password Confirmation" {...password_confirmation} />
				<Input disabled={disabled} type="text" placeholder="Phone" {...phone_number} />
				<Input disabled={disabled} type="text" placeholder="First name" {...first_name} />
				<Input disabled={disabled} type="text" placeholder="Last name" {...last_name} />
				<Button disabled={disabled} type="submit">Login</Button>
			</Form>			
		</Fragment>
	)
}