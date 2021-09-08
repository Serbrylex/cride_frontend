import styled, { css } from 'styled-components'
import { Link as LinkStyle } from '@reach/router'


export const Container = styled.div`
	display: flex;
`

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

export const SectionsContainer = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	width: 100%;
	height: 90vh;
`

export const DivContainerPolos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90vh;
`

export const Elements = styled.div`
	width: 100%;
	height: 100%;
	padding: 5%;	
	color: white;
	display: flex;
	align-items: center;
`

export const AlignItems = styled.div`
	height: auto;
	width: 100%;	
`

export const H1Information = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	margin-bottom: 10px;
`

export const Img = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 100%;
	margin-right: 15px;
`

export const CirclesList = styled.div`	
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	border: 1px solid #303030;
	color: white;
	background-color: #202020;
	padding: 5%;
`

export const Link = styled(LinkStyle)`	
	display: flex;
	align-items: center;
	margin-right: 10px;	
	text-decoration: none;
	color: #aaa;
`

export const ListUserInfo = styled.ul`
	text-align: left;
	margin-left: 10px;
`

export const ListCirclesUser = styled.ul`
	text-align: center;
	padding: 2%;
`

export const Li = styled.li`
	display: flex;
	align-items: center;
	margin: 10px 0;	
`