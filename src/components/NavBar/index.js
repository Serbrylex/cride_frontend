import React, { Fragment } from 'react'

import { Nav, Link, Div, LinkButton } from './styles'

import { AiFillCar, AiFillApi } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";

export const NavBar = ({ isRegister = false }) => {

	return (
		<Nav>  
			<Div> 
				<Link to='/'>
					<AiFillCar size='32px' /> <h3>Comparte Ride</h3>
				</Link>
			</Div>
			<Div>
				<Link to='/login'>
					<RiLoginBoxFill size='27px' /> <p>Iniciar</p>
				</Link>
				<LinkButton to='/circles'>
					<AiFillApi size='27px' /> <p>Solicitar grupo</p>
				</LinkButton>
			</Div>
		</Nav>			
	)
}