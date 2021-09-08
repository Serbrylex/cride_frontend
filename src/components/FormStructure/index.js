import React from 'react'

import { AccountBloq } from '../AccountBloq'
import { AppReference } from '../AppReference'

import { Div, FormContainer } from './styles' 

export const FormStructure = ({ children, title, text, textLink, link }) => {

	return (
		<Div>
			<FormContainer>
				<h1>{title}</h1>
				{children}
			</FormContainer>	
			<AccountBloq text={text} textLink={textLink} link={link} />
			<AppReference />
		</Div>
	)
}