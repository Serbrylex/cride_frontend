import styled, { css } from 'styled-components'


export const Div = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #181818;

	${props => props.displayView && css` 
  		{  			
  			padding: 0 10%;
		}
  	`}
` 

export const Container = styled.div`
	display: flex;
`
