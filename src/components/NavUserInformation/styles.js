import styled, { css } from 'styled-components'
import { Link as LinkStyle } from '@reach/router'


export const Nav = styled.nav`
	width: 250px;
	height: 100vh;
	background-color: #202020;
	
	${props => props.displayView && css`
		{
			display: none;
		}
	`}
`

export const Scroll = styled.div`
	width: 250px;
	height: 80vh;
	overflow-y: hidden;
	overflow-x: hidden;

	${props => props.focus && css`
		{		
			overflow-y: scroll;
		}
	`}
`

export const Section = styled.section`
	display: block;
	width: 250px;
	height: auto;
	border-bottom: 1px solid #383838;
	color: white; 
	padding: 10px 0 10px 20px;		
	text-align: left;
`

export const HamburferContaier = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 250px;
`

export const Img = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 100%;	
`

export const UserData = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid grey;
	padding-bottom: 10px;
	margin-bottom: 10px;
`

export const SectionTitle = styled.h3`
	text-align: left;
	color: #aaa;
	margin: 5px auto;	
`

export const Link = styled(LinkStyle)`
	color: white;
	text-decoration: none;
	margin-left: 20px;
`

export const LinkUtilities = styled(LinkStyle)`
	color: white;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: left;
	margin: 10px 0 10px 20px;
`

export const SectionTop = styled.div`
	display: block;
	width: 250px;
	height: 10vh;
	border-bottom: 1px solid #383838;
	color: white;	
	text-align: center;
`

export const Mouse = styled.p`
	cursor: pointer;
`

export const UserExtraReference = styled.div`
	display: none;
	width: 250px;
	height: auto;	
	color: white;
	padding: 20px;	
	text-align: center;	
	position: absolute;
	top: 20vh;
	left: 20px;
	border-radius: 5px;
	box-shadow: rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px;
	${props => props.displayView && css`
		{
			display: block;
			z-index: 2;
			background-color: #212121;
		}
	`}
`

export const UserReference = styled.div`
	display: block;
	margin: 0 10px;
	text-align: center;	
`

export const SectionUserData = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	display: flex;
	width: 300px;
	height: auto;	
	color: white;
	text-align: center;
	border-radius: 20px;	
	padding: 5px;	
	cursor: pointer;
	margin: 10px;
	${props => props.effect && css`
		{			
			background-color: #121212;
		}
	`}
`

export const SectionUser = styled.div`
	display: flex;
	width: 250px;
	height: 10vh;
	border-bottom: 1px solid #383838;
	color: white;	
	text-align: center;
	align-items: center;
	justify-content: center;
`