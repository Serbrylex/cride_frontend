import React from 'react'

import { Nav, HamburgerButton, Form, Input, Button } from './styles'

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa'


export const NavBarCirclesSearch = ({ displayView, setDisplayView, query, setQuery }) => {

	const aparece = () => {
		setDisplayView(!displayView)
	}

	const handleSubmit = event => {  
		event.preventDefault()
		console.log(query)
	}
 
	return (
		<Nav>
			<HamburgerButton onClick={aparece} displayView={displayView}>
				<GiHamburgerMenu size="27px" />
			</HamburgerButton>
			<Form onSubmit={handleSubmit}>
				<Input 
					name='search'
					type="text"			            
		            value={query}
		            onChange={e => { 
		              setQuery(e.target.value);
		            }}
				/>	
				<Button type="submit">
					<FaSearch size="17px" />
				</Button>				
			</Form>
		</Nav>
	)
}