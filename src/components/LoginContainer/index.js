import React, { Fragment } from 'react'

import { Div, DivDiv, DivImg } from './styles'

import { ImgLogin } from '../ImgLogin'
import { LoginForm } from '../LoginForm'
import { FormStructure } from '../FormStructure'


export const LoginContainer = ({ onSubmit }) => {

	const title = 'Comparte Ride'

	return (
		<Div>
			<DivImg>
				<ImgLogin /> 
			</DivImg>
			<DivDiv></DivDiv>
			<FormStructure title={title} text='¿No tienes una cuenta?' textLink='Regístrate' link='/signup'>
				<LoginForm onSubmit={onSubmit}/>
			</FormStructure>
		</Div>
	)
}