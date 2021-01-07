import classes from './PrimaryButton.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

function PrimaryButton(props) {
	let ButtonClasses
	let LinkedButton

	if (props.primary) {
		ButtonClasses = classes.PrimaryButton
	}
	if (props.secondary) {
		ButtonClasses = classes.SecondaryButton
	}
	if (props.third) {
		ButtonClasses = classes.ThirdButton
	}
	if (props.fourth) {
		ButtonClasses = classes.FourthButton
	}
	if (props.link) {
		LinkedButton = (
			<NavLink to={props.link} exact={true}>
				<div className={classes.ButtonLable}>
					{props.whatsapp ? <WhatsAppIcon style={{ marginRight: '10px' }} /> : null}
					{props.label}
					{props.icon ? <ArrowForwardIcon style={{ marginLeft: '10px' }} /> : null}
				</div>
			</NavLink>
		)
	} else {
		LinkedButton = (
			<div className={classes.ButtonLable}>
				{props.whatsapp ? <WhatsAppIcon style={{ marginRight: '10px' }} /> : null}
				{props.label}
				{props.icon ? <ArrowForwardIcon style={{ marginLeft: '10px' }} /> : null}
			</div>
		)
	}
	if (props.scrollTo) {
		LinkedButton = (
			<Link to={props.scrollTo} spy={true} smooth={true}>
				<div className={classes.ButtonLable}>
					{props.whatsapp ? <WhatsAppIcon style={{ marginRight: '10px' }} /> : null}
					{props.label}
					{props.icon ? <ArrowForwardIcon style={{ marginLeft: '10px' }} /> : null}
				</div>
			</Link>
		)
	}
	return (
		<button className={ButtonClasses} onClick={props.toggle ? props.initToggle : null}>
			{LinkedButton}
		</button>
	)
}

export default PrimaryButton
