import classes from './PrimaryButton.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { NavLink } from 'react-router-dom'

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
  if (props.link) {
    LinkedButton = (
      <NavLink to={props.link} exact={true}>
        <div className={classes.ButtonLable}>
          {props.label}
          {props.icon ? (
            <ArrowForwardIcon style={{ marginLeft: '10px' }} />
          ) : null}
        </div>
      </NavLink>
    )
  } else {
    LinkedButton = (
      <div className={classes.ButtonLable}>
        {props.label}
        {props.icon ? (
          <ArrowForwardIcon style={{ marginLeft: '10px' }} />
        ) : null}
      </div>
    )
  }
  return <button className={ButtonClasses}>{LinkedButton}</button>
}

export default PrimaryButton
