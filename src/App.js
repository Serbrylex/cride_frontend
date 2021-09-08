import React, { Fragment, useContext } from 'react'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { GlobalStyles } from './styles/GlobalStyles'

//const Home = React.lazy(() => import('./pages/Home'))

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Circles } from './pages/Circles'
import { NotFound } from './pages/NotFound'
import { CircleDetail } from './pages/CircleDetail'
import { CirclesCreate } from './pages/CirclesCreate'
import { RidesCreate } from './pages/RidesCreate'
import { UserProfile } from './pages/UserProfile'

/*export const App = () => {
	return (
		<Suspense fallback={<div />}>
      		<GlobalStyles />	
      		<Router>
      			{!token && <Login path='/login' />}
                        {!token && <Signup path='/signup' />}
                        {!token && <Redirect noThrow from='/favs' to='/login' />}
                        {!token && <Redirect noThrow from='/user' to='/login' />}
                        {token && <Redirect noThrow from='/login' to='/' />}   
      		</Router>
      	</Suspense>
	)
}

*/

export const App = () => {

      const { token } = useContext(Context)

	return (
		<Fragment>
      		<GlobalStyles />	
      		<Router>
                        <NotFound default />
      			<Home path='/' />
                        <Login path='/login' />
                        <Signup path='/signup' />                     
                        <Circles path='/circles' />    
                        <CirclesCreate path='/circles/create' />
                        <CircleDetail path='/circles/detail/:slug_name' />
                        <RidesCreate path='/circles/create/ride/:slug_name' />    
                        <UserProfile path='/user/:usernameto' /> 
      		</Router>
      	</Fragment>
	)
}