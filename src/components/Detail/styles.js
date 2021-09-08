import styled from 'styled-components'


export const PageContainer = styled.div`
	height: 90vh;
	width: 100%;
	overflow-y: scroll;
	color: white;
`

export const HeaderDescription = styled.div`
	height: 75vh;
	width: 100%;
	display: block;
	position: relative;
`
export const Feed = styled.div`
	height: auto;
	width: 100%;
	display: block;
	padding: 0 20px 0 20px;
`

export const HeaderDescriptionInfo = styled.div`
	width: 100%;
	height: 50%;
	position: relative;	
`

export const ImgBackground = styled.img`
	width: 100%;
	height: 25vh;
	object-fit: cover;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
`

export const InfoContainer = styled.div`
	display: flex;
	width: 100%;
	height: 50vh;	
	justify-content: space-between;
	position: relative;
	z-index: 2;
	padding: 0 20px 0 20px;
`

export const DivCircle = styled.div`
	display: block;
	width: 100%;
	height: 30vh;
	margin: 14vh 0 0 0;
`

export const DivCircleGeneral = styled.div`
	width: 100%;
	height: 19vh;
	margin: 30vh 0 0 0;	
	text-align: right;
`

export const About = styled.div`
	width: 100%;
	height: 19vh;	
	position: absolute;
	top: 55vh;
	left: 0; 
	right: 0;
	padding: 0 20px 0 20px;
	z-index: 5;
`

export const ImgCircle = styled.img`
	width: 20vh;
	height: 20vh;
	object-fit: cover;
	border-radius: 100%;
	border: 1vh solid black;	
`

export const Button = styled.button`
	position: absolute;
	top: 23vh;
	height: 5vh;
	width: 200px;
	border: 1px solid white;
	background-color: #181818;
	color: white;
	border-radius: 5px;
	right: 20px;
	cursor: pointer;
	z-index: 5;
`

export const ListContainer = styled.ul`
	padding: 20px 0;
`