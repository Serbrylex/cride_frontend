import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'


export const Nav = styled.nav`
	align-items: center;
	background: rgb(0, 0, 0) transparent;
	display: flex;
	justify-content: space-between; 
	width: 100%;
	height: 10%; 
	margin: 0 auto;	
	padding: 10px auto;
`

export const Div = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;	
`

export const Link = styled(LinkRouter)`
	display: flex;
	margin: 10px 20px;
	text-decoration: none;
	color: white;
	
`

export const LinkButton = styled(LinkRouter)`
	display: flex;
	margin: 5px 20px;
	text-decoration: none;
	color: white;
	border: 1px solid white;
	padding: 5px 10px;
`
