import React from 'react'

import { Container, Div, Button, Paragraph, DivButton } from './styles'

export const HomeContent = () => { 
	return (
		<Container>
		    <Div>
				<h1>Comparte rides en tu comunidad</h1>
				<Paragraph><small>Dale la vuelta al hoy no circula</small></Paragraph>				
				<DivButton>
					<Button to='/login'>Iniciar</Button> 
				</DivButton>
				<Paragraph><h3>241</h3></Paragraph>
				<Paragraph>Usuarios registrados</Paragraph>
			</Div>
		</Container>
	)
}