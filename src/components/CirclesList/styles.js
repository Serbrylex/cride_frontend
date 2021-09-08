import styled, { css } from 'styled-components'
import { Link as LinkCircles } from '@reach/router'


export const Div = styled.div`
	width: 100%;
	height: 90vh;
	background-color: #181818;
`

export const List = styled.ul`
	width: 100%;
	height: 90vh;
	padding: 20px;
	display: block;
	text-align: center;
	overflow-y: scroll;
`

export const CircleElement = styled.li`
	list-style: none;
	width: 80%;
	height: 150px;
	background-color: #202020;
	display: block;
	text-align: center;
	align-items: center;
	justify-content: center;
	color: #aaa;
	padding: 10px;
	margin: 20px auto;

`

export const TopCircleInformation = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const TopCircleInformationLinks = styled.div`
	display: flex;
	justify-content: left;
	height: 100%;
	width: 80%;
	align-items: center;
	padding: 10px;
`

export const Img = styled.img`
	width: 35px;
	height: 35px;
	object-fit: cover;
	border-radius: 100%;	
	margin-right: 10px;
`

export const TopCircleInformationOptional = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: right;
	align-items: center;
	color: white;
	justify-content: space-between;
	padding: 10px;
`

export const BottomCircleInformation = styled.div`
	display: flex;
	width: 100%;
	height: 75%;
`

export const AboutDiv = styled.div`
	display: block;
	margin: 1%;
	width: 70%;
	height: 100%;
	text-align: left;
`

export const Description = styled.p`
	padding: 2px;
	border-radius: 5px;
	border: 1px solid black;
	height: 70%;
	width: 100%;
`

export const RidesDiv = styled.div`
	width: 28%;
	height: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Link = styled(LinkCircles)`
	color: #aaa;
	text-decoration: none;
`