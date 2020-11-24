import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Navbar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'
import NavItems from '../Navbar/NavItems/NavItems'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar(props) {
  return (
    <nav className={classes.Navbar}>
      <Logo className={classes.Logo} />
      <ul className={classes.NavItems}>
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
      <section className={classes.Button}>
        <PrimaryButton label='Lets Talk' secondary={true} link='/' />
      </section>
      <div className={classes.ToggleButton} onClick={props.ToggleSideDrawer}>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navbar
