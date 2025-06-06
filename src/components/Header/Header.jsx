import React from 'react'
import logo from '../../assets/images/LOGO.png'
import Nav from '../Nav/Nav'
import '../Header/Header.scss'

export default function Header() {
  return (
		<header className="headerWrap">
			<figure className='headerWrap__fig'>
				<img src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	)
}
