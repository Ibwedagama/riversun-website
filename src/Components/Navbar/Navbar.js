import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import PrimaryButton from '../Buttons/PrimaryButton'
import NavItems from '../Navbar/NavItems/NavItems'
import MenuIcon from '@material-ui/icons/Menu'

class Navbar extends Component {
	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll)
	}
	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll = () => {
		if (window.scrollY > 20) {
			document.querySelector('.Navbar').className = 'Navbar Scroll'
			if (window.scrollY >= this.props.BodyHeight) {
				document.querySelector('.Navbar').className = 'Navbar Scroll Hidden'
			}
		} else {
			document.querySelector('.Navbar').className = 'Navbar'
		}
	}
	render() {
		return (
			<nav className='Navbar'>
				<Logo className='Logo' />
				<ul className='NavItems'>
					<NavItems link='/' active>
						Home
					</NavItems>
					<NavItems link='/portfolio'>Our Works</NavItems>
					<NavItems link='/blog'>Blog</NavItems>
				</ul>
				<section className='Button'>
					<PrimaryButton label='Lets Talk' secondary toggle initToggle={this.props.ToggleModal} />
				</section>
				<div className='ToggleButton' onClick={this.props.ToggleSideDrawer}>
					<MenuIcon />
				</div>
			</nav>
		)
	}
}

export default Navbar
