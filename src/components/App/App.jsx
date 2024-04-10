import React from 'react'
import {Outlet} from 'react-router-dom'
import { Header } from '../Header/header'

export const App = () => (
	<>
    <Header />
		<Outlet />
	</>
)
