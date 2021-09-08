import React, { useEffect, useState } from 'react'

import { 
	Form, Input, Button, FormContainer, TextArea, MainInformation, 
	ImageInput, LabelImage, Img, MainInformationContainersLeft,
	MainInformationContainersRight, CheckContainer, InputCheck, 
	CheckText, CameraIcon, ContainerCheck
} from './styles'

import { useInputValue } from '../../hooks/useInputValue'

import imageBefore from '../../assets/astronauta.jpg'

import { AiFillCamera } from 'react-icons/ai'

export const CirclesForm = ({ onSubmit, nameForm = "", slug_nameForm = "", aboutForm = "", pictureForm = imageBefore, is_publicForm = false, is_limitedForm = false, members_limitForm = "" }) => {

	const [imagen, setImagen] = useState(pictureForm)
	const [is_public, setIs_public] = useState(is_publicForm)
	const [is_limited, setIs_limited] = useState(is_limitedForm)
	const [imageSave, setImageSave] = useState(undefined)
 
	const name = useInputValue(nameForm) 
	const slug_name = useInputValue(slug_nameForm)
	const about = useInputValue(aboutForm)
	const members_limit = useInputValue(members_limitForm)
	
	const picture = React.createRef()

	const handleSubmit = event => {  
		event.preventDefault()		

		const data = {
			name: name.value, 
			slug_name: slug_name.value,			
			about: about.value,
			picture: imageSave, 
			is_public: is_public,
			is_limited: is_limited,
			members_limit: members_limit.value
		}		

		onSubmit(data)
	}

	const handleImageChange = (e) => {		
		setImagen(window.URL.createObjectURL(picture.current.files[0]))				
		setImageSave(picture.current.files[0])		
	}

	let disabled = false

 
	return (
		<FormContainer>
			<Form disabled={disabled} onSubmit={handleSubmit}>	
				<MainInformation>
					<MainInformationContainersLeft>
						<Input disabled={disabled} type="text" placeholder="Name" {...name} />
						<Input disabled={disabled} type="text" placeholder="Slug Name" {...slug_name} />
						<ContainerCheck>
							<CheckContainer>								
								<CheckText>Is Limited</CheckText>	
								<input 
									disabled={disabled} 
									type="checkbox" 
									placeholder="Is Limited"
									checked={is_limited}
									onChange={() => setIs_limited(!is_limited)} 
								/>								
								<InputCheck disabled={disabled} type="number" placeholder="Members Limit" {...members_limit} />
							</CheckContainer>
							<CheckContainer>
								<CheckText>Is Public</CheckText>	
								<input 
									disabled={disabled} 
									type="checkbox" 
									placeholder="Is Public" 
									checked={is_public}
									onChange={() => setIs_public(!is_public)} 
								/>							
							</CheckContainer>
						</ContainerCheck>						
					</MainInformationContainersLeft>
					<MainInformationContainersRight>
						<Img src={imagen} alt="Imagen Profile" />
						<ImageInput 
							disabled={disabled} 
							type="file" 
							placeholder="Picture" 
							id="file"
							accept="image/*" 
							name="pictureFile"							
							ref={picture}
							onChange={handleImageChange}							
						/>						
						<LabelImage htmlFor="file">
							<AiFillCamera size="25px" />
						</LabelImage>
					</MainInformationContainersRight>
				</MainInformation>			
				<TextArea placeholder="About" {...about} />								
				<Button disabled={disabled} type="submit">Enviar</Button>
			</Form>		
		</FormContainer>
	)
}