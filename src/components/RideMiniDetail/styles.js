import styled, { css } from 'styled-components'

import { Link as MyLinkStyle} from '@reach/router'


export const Container = styled.li`
	list-style: none;
	height: 490px;
	width: 100%;
	padding: 20px;
	background-color: #202020;
	color: white;
	border: 1px solid white;
	border-radius: 5px;
	margin: 10px 0;
	position: relative;
`

export const Div = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid black;
	justify-content: space-between;
	width: 100%;
	height: 50px;	
`

export const RideLink = styled.div`
	display: flex;
	align-items: center;	
	justify-content: right;
	width: 100%;
	height: 100%;	
`

export const Link = styled(MyLinkStyle)`
	text-decoration: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Img = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 100%;
`

export const DivInternLeft = styled.div`
	display: flex;
	align-items: center;	
	justify-content: left;
	width: 100%;
	height: 50px;	
`
export const DivInternRight = styled.div`
	display: flex;
	align-items: center;	
	justify-content: right;
	width: 100%;
	height: 50px;	
`
export const Description =  styled.p`
	margin-right: 10px;
`

export const Passengers= styled.div`
	position: absolute;
	top: 0;
	right: 30px;
	left: 30px;
	bottom: 0;
	background-color: white;
	border-radius: 2px;
	display: none;
	color: black;
	${props => props.click && css` 
  		{  			
  			display: flex;  			
		}
  	`}
`

export const ListUl = styled.ul`
	padding: 50px;
	width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
`

export const ListElement = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid black;
	padding: 10px 0;
`

export const ButtonX = styled.button`
	color: white;
	background-color: red;	
	height: 20px;
	width: 20px;	
`

export const ButtonPassengers = styled.button`
	color: white;

	&[disabled] {
		opacity: .3;
	}
`