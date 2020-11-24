import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './Navbar.css'
import PrimaryButton from '../Buttons/PrimaryButton'
import NavItems from '../Navbar/NavItems/NavItems'
import MenuIcon from '@material-ui/icons/Menu'

class Navbar extends Component {
  
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.addEventListener("scroll", this.handleScroll)
  }
  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".Navbar").className = 'Navbar Scroll';
    } else {
      document.querySelector(".Navbar").className = 'Navbar';
    }
  }
  render(){
    return (
      <nav className='Navbar'>
        <Logo className='Logo' />
        <ul className='NavItems'>
          <li>
            <NavItems link='/' active>
              Home
            </NavItems>
          </li>
          <li>
            <NavItems link='/portfolio'>Our Works</NavItems>
          </li>
          <li>
            <NavItems link='/blog'>Blog</NavItems>
          </li>
        </ul>
        <section className='Button'>
          <PrimaryButton label='Lets Talk' secondary={true} link='/' />
        </section>
        <div className='ToggleButton' onClick={this.props.ToggleSideDrawer}>
          <MenuIcon />
        </div>
      </nav>
    )
    }
  
}

export default Navbar
