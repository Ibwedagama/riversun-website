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
				<NavItems link='/' active secondary={true}>
					Home
				</NavItems>

				<NavItems link='/portfolio' secondary={true}>
					Our Works
				</NavItems>

				<NavItems link='/blog' secondary={true}>
					Blog
				</NavItems>

				<PrimaryButton label='Lets Talk' secondary={true} toggle={true} initToggle={props.showModal} />
			</ul>
		</div>
	)
}

export default SideDrawer
