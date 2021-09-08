import React from 'react'

import { Div } from './styles'

import { Layout } from '../Layout' 

export const LayoutHome = ({ children, title, subtitle }) => {	

	return (		
		<Layout title={title} subtitle={subtitle}>				
			<Div>
				{children}
			</Div>		
		</Layout>			
	)
}
