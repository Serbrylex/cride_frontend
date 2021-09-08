import styled from 'styled-components'


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

