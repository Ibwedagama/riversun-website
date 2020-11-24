import './NavItems.css'
import { NavLink } from 'react-router-dom'

function NavItems(props) {
  let activeClass = 'IsActive'
  if (props.secondary) {
    activeClass = 'SecondaryActive'
  }
  return (
    <li className='NavItems'>
      <NavLink to={props.link} exact={true} activeClassName={activeClass}>
        {props.children}
      </NavLink>
    </li>
  )
}
export default NavItems
