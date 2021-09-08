import styled, { css } from 'styled-components'


export const Nav = styled.nav`
	width: 100%;
	height: 10vh;	
	background-color: #202020;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Form = styled.form`
	display: flex;
	width: 60%;
	height: 50%;
	border: 1px solid #303030;
	background-color: #212121;
`

export const Input = styled.input`
	width: 90%;
	height: 100%;
	border: none;
	outline: none;
	background-color: #121212;
	color: white;
	padding: 5px;
`

export const HamburgerButton = styled.p`
	position: absolute;
	top: 20px;
	left: 20px;
	display: none;
	color: white;
	${props => props.displayView && css`
		{
			display: flex;
			cursor: pointer;
		}
	`}
`

export const Button = styled.button`
	background-color: #323232;
	color: #585858;
	height: 100%;
	width: 10%;
	border: none;
`