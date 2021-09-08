import React, { useState, useContext } from 'react'
import { Context } from '../../Context'

import { NavUserInformation } from '../NavUserInformation'
import { NavBarCirclesSearch } from '../NavBarCirclesSearch'
import { CirclesForm } from '../CirclesForm'

import { Div, Container } from './styles'


export const CirclesFormLayout = () => {

	const [displayView, setDisplayView] = useState(false)
	//const { query, setQuery, filteredCircles } = useSearchCircles(circles.results)
	const [query, setQuery] = useState('')

	const { token } = useContext(Context)

	const dataForm = {
		nameForm: "",
		slug_nameForm: "",
		aboutForm: "",
		pictureForm: "",
		is_publicForm: false,
		is_limitedForm: false,
		members_limitForm: 0
	}

	const handleCreate = props => {

		let inputData = {
			...props
		}		

		const uploadData = new FormData()
	    //uploadData.append('title', title);
	    //uploadData.append('cover', cover, cover.name);
	    uploadData.append('name', inputData.name)
		uploadData.append('slug_name', inputData.slug_name)
		uploadData.append('about', inputData.about)
		uploadData.append('picture', inputData.picture, inputData.picture.name)
		uploadData.append('is_public', inputData.is_public)
		uploadData.append('is_limited', inputData.is_limited)
		uploadData.append('members_limit', inputData.members_limit)

		const strToken = 'Token ' + token
		fetch('http://localhost:8000/circles/', {
			method: 'POST',
			headers: { 
				'Authorization': strToken
			},
			body: uploadData
		})
		  .then(json => json.json())
		  .then(data => {
		  	console.log('data', data)		  	
		  	window.location=`/circles/detail/${data.slug_name}`
		  })
		  .catch(error => {
		  	console.log('An error have ocurred: ', error)
		  })		
	}

	const onSubmitCircles = ({ name, slug_name, about, picture, is_public, is_limited, members_limit }) => {
						
		let inputData = {
			name: name,
			slug_name: slug_name,
			about: about,
			picture: picture,
			is_public: is_public,
			is_limited: is_limited,
			members_limit: members_limit
		}		
			
		handleCreate(inputData)
	}

	return (
		<Container> 			
			<NavUserInformation displayView={displayView} setDisplayView={setDisplayView} />			
			<Div displayView={displayView}>
				<NavBarCirclesSearch displayView={displayView} setDisplayView={setDisplayView} query={query} setQuery={setQuery} />
				<CirclesForm onSubmit={onSubmitCircles} />				
			</Div>		
		</Container>	
	)
}