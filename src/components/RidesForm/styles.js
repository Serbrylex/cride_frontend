import styled from 'styled-components'


export const FormContainer = styled.div`
	width: 100%;
	height: 90vh;
	padding: 5%;
`

export const Form = styled.form`
	display: block;
	width: 100%;
	height: 100%;	
`

export const Input = styled.input` 
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	margin-bottom: 10px;
	padding: 10px 5px;
	display: block;
	width: 100%;
	background-color: #121212;
	color: white;
	&[disabled] {
		opacity: .3;
	}
`

export const Button = styled.button`
	width: 100%;
	background-color: #323232;
	color: #585858;
	border: 1px solid #dbdbdb;
	color: white;
	height: 30px;
	border-radius: 5px;
	margin: 10px aut0;
`

export const TextArea = styled.textarea`
	width: 100%;
	height: 75px;
	padding: 10px 5px;
	background-color: #121212;
	color: white;
	margin-bottom: 10px;
	border-radius: 2px;
`

export const MainInformation = styled.div`
	width: 100%;
	height: auto;	
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`

export const ImageInput = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

export const MainInformationContainersLeft = styled.div`
	width: 65%;
	height: 100%;
`

export const MainInformationContainersRight = styled.div`
	width: 30%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LabelImage = styled.label`
	color: white;
	background-color: black;
	cursor: pointer;	
	position: absolute;
	border-radius: 100%;
	bottom: 20px;
	right: 20px;
	width: 35px;
	height: 35px;	
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Img = styled.img`
	border-radius: 100%;
	height: 200px;
	width: 200px;
	border: 1px solid black;
	object-fit: cover;
`

export const CheckContainer = styled.div`
	display: flex;
	width: 100%;
	color: #8f8f8f;
	justify-content: center;	
	align-items: center;
	padding: 10px 5px;	
`


export const CheckText = styled.p`
	margin: 0 10px;
`

export const ContainerCheck = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	background-color: #121212;
`
export const InputCheck = styled.input`
	width: 50%;
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	margin-left: 5px;	
	padding: 10px 5px;
	display: block;	
	background-color: #121212;
	color: white;
	&[disabled] {
		opacity: .3;
	}
`