import React from 'react'
 
import { Container, Link, AppsContainer, Img } from './styles' 

import appstore from '../../assets/appleapp.png'
import playstore from '../../assets/playapp.png'

export const AppReference = () => {
	return (
		<Container>			
			<p>Descargar app</p>			
			<AppsContainer>
				<Link to='https://www.instagram.com/'>
					<Img src={appstore} alt="" />
				</Link>
				<Link to='https://www.instagram.com/'>
					<Img src={playstore} alt="" />
				</Link>
			</AppsContainer>
		</Container>
	)
}