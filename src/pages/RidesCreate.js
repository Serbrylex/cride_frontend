import React, { useContext } from 'react'

import { Context } from '../Context'

import { RidesFormLayout } from '../components/RidesFormLayout'
import { Layout } from '../components/Layout'

export const RidesCreate = ({ slug_name }) => {

	const { token, username } = useContext(Context)

	const onSubmitRide = (props) => {
		
		let inputData = {
			...props
		}
		/*
			// 2020-12-11 04:15:50.542290
			let hoy = new Date()
			let fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate()
			let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()		

			inputData.arrival_date = fecha + ' ' + hora
			inputData.departure_date = fecha + ' ' + hora
		*/
		inputData.offered_by = username
		inputData.offered_in = slug_name

		console.log(inputData)		
		let strToken = 'Token ' + token 
		const url = `http://localhost:8000/circles/${slug_name}/rides/`
		fetch(url, {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': strToken
			},
			body: JSON.stringify(inputData)
		})
		  .then(json => json.json())
		  .then(data => {
		  	console.log('data', data)		  		
		  	window.location=`/circles/detail/${slug_name}`
		  })
		  .catch(error => {
		  	console.log('An error have ocurred ', error)
		  })	
	}

	return (
		<Layout title={`${slug_name} Create Ride`} subtitle='Aquí puedes crear tus propios rides'>			
			<RidesFormLayout onSubmit={onSubmitRide} />	
		</Layout>	
	)
}