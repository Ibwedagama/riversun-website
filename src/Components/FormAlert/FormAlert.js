import React from 'react'
import './FormAlert.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'

function FormAlert(props) {
	let AlertType = ''
	let AlertIcon = ''
	if (props.alertError) {
		AlertType = 'AlertError'
		AlertIcon = <CancelIcon style={{ color: '#FF2B2B' }} />
	} else {
		AlertType = 'AlertSuccess'
		AlertIcon = <CheckCircleIcon style={{ color: '#43D787' }} />
	}
	return (
		<div className={AlertType}>
			<div className='AlertIcon'>{AlertIcon}</div>
			<div className='AlertInfo'>
				<p className='AlertTitle'>{props.alertTitle}</p>
				<p className='AlertSubtitle'>{props.alertSubtitle}</p>
			</div>
		</div>
	)
}

export default FormAlert
