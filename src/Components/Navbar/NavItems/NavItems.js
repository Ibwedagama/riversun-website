import classes from './NavItems.module.css'
import { NavLink } from 'react-router-dom'

function NavItems(props) {
  let linkItems = (
    <li className={classes.NavItems}>
      <NavLink to={props.link} exact={true} activeClassName={classes.IsActive}>
        {props.children}
      </NavLink>
    </li>
  )
  if (props.secondary) {
    linkItems = (
      <li className={classes.NavItems}>
        <NavLink
          to={props.link}
          exact={true}
          activeClassName={classes.SecondaryActive}
        >
          {props.children}
        </NavLink>
      </li>
    )
  }
  return <>{linkItems}</>
}
export default NavItems
