import styled, { css } from 'styled-components'


export const Div = styled.div`
	width: 75vw;
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	${props => props.displayView && css` 
  		{
  			width: 100vw;
  			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			left: 0;
		}
  	`}
` 

export const Container = styled.div`
	display: flex;
`
