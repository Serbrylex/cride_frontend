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
 
// 2020-12-11 04:15:50.542290
export const RidesForm = ({ onSubmit, offered_by='', offered_in='', available_seats='', comments='', departure_location='', departure_date='', arrival_location='', arrival_date='', rating='', is_active=true }) => {		
	const available_seatsForm = useInputValue(available_seats)
	const commentsForm = useInputValue(comments)
	const departure_locationForm = useInputValue(departure_location)
	const arrival_locationForm = useInputValue(arrival_location)
	const ratingForm = useInputValue(rating)

	const departure_dateForm = useInputValue(departure_date)
	const departure_timeForm = useInputValue('')
	const arrival_dateForm = useInputValue(arrival_date)
	const arrival_timeForm = useInputValue('')

	const [is_activeForm, setIs_activeForm] = useState(is_active)
	
	const handleSubmit = event => {  
		event.preventDefault()		

		departure_dateForm.value = departure_dateForm.value + ' ' + departure_timeForm.value + ':0'
		arrival_dateForm.value = arrival_dateForm.value + ' ' + arrival_timeForm.value + ':0'

		const data = {			
			available_seats: available_seatsForm.value,
			comments: commentsForm.value,
			departure_location: departure_locationForm.value,
			departure_date: departure_dateForm.value,
			arrival_location: arrival_locationForm.value,
			arrival_date: arrival_dateForm.value,
			rating: ratingForm.value,
			is_active: is_activeForm
		}		

		onSubmit(data)
	}

	const disabled = false

	return (
		<FormContainer>
			<Form disabled={disabled} onSubmit={handleSubmit}>						
				<Input type='number' placeholder='Seats available' disabled={disabled} {...available_seatsForm} />
				<TextArea type='text' placeholder='Coments' disabled={disabled} {...commentsForm} />
				<Input type='text' placeholder='Departure Location' disabled={disabled} {...departure_locationForm} />
				<Input type='text' placeholder='Arrival Location' disabled={disabled} {...arrival_locationForm} />
				<Input type='date' placeholder='Departure Date' disabled={disabled} {...departure_dateForm} />
				<Input type="time" id="appt" disabled={disabled} {...departure_timeForm}/>			
				<Input type='date' placeholder='Arrival Date' disabled={disabled} {...arrival_dateForm} />
				<Input type="time" id="appt" disabled={disabled} {...arrival_timeForm}/>
				<Input type='number' placeholder='Rating' disabled={disabled} {...ratingForm} />
				<CheckContainer>
					<CheckText>Is active</CheckText>	
					<input 
						type='checkbox' 
						checked={is_activeForm}
						onChange={() => setIs_activeForm(!is_activeForm)} 
						disabled={disabled} 
					/>							
				</CheckContainer>				
				<Button disabled={disabled} type="submit">Enviar</Button>
			</Form>
		</FormContainer>
	)

}