import './NavItems.css'
import { NavLink } from 'react-router-dom'

function NavItems(props) {
  let activeClass = 'IsActive'
  if (props.secondary) {
    activeClass = 'SecondaryActive'
  }
  return (
    <div className='NavItems'>
      <NavLink to={props.link} exact={true} activeClassName={activeClass}>
        {props.children}
      </NavLink>
    </div>
  )
}
export default NavItems
