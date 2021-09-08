import React from 'react'

import { Div, Link } from './styles'

export const AccountBloq = ({ text, textLink, link }) => {

	return (
		<Div> 
			<p>{text} <Link to={link}>{textLink}</Link></p>
		</Div>
	)
}