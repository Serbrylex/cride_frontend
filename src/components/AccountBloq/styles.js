import styled from 'styled-components'

import { Link as LinkForm } from '@reach/router'

export const Div = styled.div`
	width: 100%;
	border: 1px solid #dbdbdb;
	display: flex;
	align-items: center;
	justify-content: center;	
	margin: 20px 0;
	height: 50px;
`

export const Link = styled(LinkForm)`
	color: #52b7e3;
	text-decoration: none;
`