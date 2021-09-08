import styled from 'styled-components'

import { Link as AppLink } from '@reach/router'


export const Container = styled.div`
	display: block;
	width: 100%;
	height: 100px;
	text-align: center;
`

export const AppsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Link = styled(AppLink)`
	height: auto;
	width: 45%;
	margin: 20px auto;
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
`