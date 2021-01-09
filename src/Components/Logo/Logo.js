import LogoRiversun from '../../Assets/riversunlogo.png'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
		<NavLink to='/' exact>
			<img src={LogoRiversun} alt='Riversun Logo' />
		</NavLink>
	)
}

export default Logo
