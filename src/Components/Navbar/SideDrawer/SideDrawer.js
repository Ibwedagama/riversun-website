import React from 'react'
import NavItems from '../NavItems/NavItems'
import PrimaryButton from '../../Buttons/PrimaryButton'
import './SideDrawer.css'
import CloseIcon from '@material-ui/icons/Close'

function SideDrawer(props) {
  let toggleClasses = 'SideDrawer'
  if (props.show) {
    toggleClasses = 'SideDrawer open'
  }
  return (
    <div className={toggleClasses}>
      <div className='CloseButton'>
        <CloseIcon onClick={props.CloseHandler} />
      </div>
      <ul className='Items'>
        <li>
          <NavItems link='/' active secondary={true}>
            Home
          </NavItems>
        </li>
        <li>
          <NavItems link='/portfolio' secondary={true}>
            Our Works
          </NavItems>
        </li>
        <li>
          <NavItems link='/blog' secondary={true}>
            Blog
          </NavItems>
        </li>
        <li>
          <PrimaryButton label='Lets Talk' secondary={true} link='/' />
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
