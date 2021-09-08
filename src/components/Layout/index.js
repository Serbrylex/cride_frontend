import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'
 
import PropTypes from 'prop-types'


export const Layout = ({ children, title, subtitle }) => {

	return (
		<Fragment>
			<Helmet>
				{title && <title>{title} | Comparte Ride</title>}
				{subtitle && <meta name='description' content={subtitle}/>}
			</Helmet>			
			<div>				
				{children}				
			</div>
		</Fragment>
	)
}

// PropTypes.node - Quiere decir que es cualquier cosa que React pueda renderizar
Layout.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}