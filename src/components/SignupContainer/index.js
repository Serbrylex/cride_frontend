import React, { Fragment } from 'react'

import { Div, DivDiv, DivImg } from './styles'

import { SignupForm } from '../SignupForm'
import { FormStructure } from '../FormStructure'


export const SignupContainer = ({ onSubmit }) => {

	const title = 'Comparte Ride'

	return (
		<Div>			
			<FormStructure title={title} text='¿Tienes una cuenta? ' textLink='Inicia sesión' link='/login'>
				<SignupForm onSubmit={onSubmit} />
			</FormStructure>
		</Div>
	)
}