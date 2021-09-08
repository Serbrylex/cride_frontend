import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
	/*
	const [isAuth, setIsAuth] = useState(
		window.sessionStorage.getItem(‘token’)
	)
	Eso no está shilo, porqué: 

	El problema con window.sessionStorage es que es síncrono. 
	Esto bloquea el thread principal. Haciendo que sea una 
	función, conseguimos que la inicialización del estado sea 
	“lazy”, de forma que no bloquee el renderizado de la 
	aplicación. 
	*/

	/*
	#303030;
	#303030;
	#202020;
	white
	*/
	const [token, setToken] = useState(() => {		
		return window.sessionStorage.getItem('token')			
	})

	const [username, setUserName]  = useState(() => {
		return window.sessionStorage.getItem('username')
	})

	const [theme, setTheme]  = useState(() => {
		if (window.sessionStorage.getItem('theme')) {
			return false
		}
		return true
	})

	const value = {
		username,
		token,
		theme,
		changeTheme: BooleanTheme => {			
			setTheme(BooleanTheme)
			window.sessionStorage.setItem('theme', BooleanTheme)				
		},
		activateAuth: newToken => {			
			setUserName(newToken.user.username)
			setToken(newToken.access_token)
			window.sessionStorage.setItem('token', newToken.access_token)				
			window.sessionStorage.setItem('username', newToken.user.username)				
		},
		removeAuth: () => {
			setToken('')
			setUserName('')
			window.sessionStorage.removeItem('token')
			window.sessionStorage.removeItem('username')
			window.sessionStorage.removeItem('theme')				
		}
	}

	return (
		<Context.Provider value={value}>
			{ children }
		</Context.Provider>
	)
}

export default {
	Provider, 
	Consumer: Context.Consumer
}