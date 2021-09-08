import styled from 'styled-components'

export const Div = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	padding: 30px auto;
	align-items: center;
	background-color: #fafafa;
`

export const DivDiv = styled.div`
	height: 100%;
	margin: 0 20px;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`

export const DivImg = styled.div`
	width: 350px;
	height: 90%;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`

