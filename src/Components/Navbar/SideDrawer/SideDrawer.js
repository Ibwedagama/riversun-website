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
				<NavItems link='/' active secondary>
					Home
				</NavItems>

				<NavItems link='/portfolio' secondary>
					Our Works
				</NavItems>

				<NavItems link='/blog' secondary>
					Blog
				</NavItems>

				<PrimaryButton label='Lets Talk' secondary toggle initToggle={props.showModal} />
			</ul>
		</div>
	)
}

export default SideDrawer
