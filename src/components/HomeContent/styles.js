import styled from 'styled-components'

import { Link as LinkButton } from '@reach/router'



export const Container = styled.main`
	background: rgb(0, 0, 0) transparent;
	width: 100%;
	height: 90%;		
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Div = styled.div`	 
	text-align: center;
	width: auto;
	height: auto;	
	color: white;	
`

export const Button = styled(LinkButton)`
	border: 1px solid #da513e;
	padding: 10px 20px;
	background-color: #da513e;
	color: white;
	margin: 10px auto;
	text-decoration: none;
`

export const Paragraph = styled.p`
	margin: 5px auto;
`

export const DivButton = styled.div`
	margin: 20px auto;
`
/*
const Content = styled.div`
    background-image: url(${props => props.img});
`;

<Content img={ImagePath} />
*/