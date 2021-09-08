import styled from 'styled-components'

import { Link as AccountLink } from '@reach/router'

export const Form = styled.form`
	display: block;
	margin-top: 10px;
`

export const Input = styled.input` 
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	margin-bottom: 8px;
	padding: 10px 5px;
	display: block;
	width: 100%;
	&[disabled] {
		opacity: .3;
	}
`

export const Button = styled.button`
	width: 100%;
	background-color: #b2dffc;
	border: 1px solid #dbdbdb;
	color: white;
	height: 30px;
	border-radius: 5px;
	margin: 10px aut0;
`

export const DivHR = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const DivLine = styled.div`
	background-color: rgba(var(--b38,219,219,219),1);
	height: 1px;
	width: 100%;
`

export const DivExistingAccount = styled.div`
	display: block;
	text-align: center;	
`

export const Link = styled(AccountLink)`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	color: rgb(55, 89, 115);
	text-decoration: none;
`