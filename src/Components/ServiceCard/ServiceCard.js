import React from 'react'
import classes from './ServiceCard.module.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

function ServiceCard(props) {
  let CardElement = (
    <div className={classes.CardElement}>
      <div className={classes.ShowButton} onClick={props.toggleService}>
        <ArrowUpwardIcon />
      </div>
      <div className={classes.Info}>
        <h3 className={classes.Title}>{props.title}</h3>
        <p className={classes.Subtitle}>{props.subtitle}</p>
      </div>
    </div>
  )

  if (props.showService) {
    CardElement = (
      <div className={classes.CardElementExpand}>
        <div className={classes.ShowButton} onClick={props.toggleService}>
          <ArrowDownwardIcon />
        </div>
        <div className={classes.InfoExpand}>
          <h3 className={classes.Title}>{props.title}</h3>
          <p className={classes.Subtitle}>{props.fulldesc}</p>
        </div>
      </div>
    )
  }

  return (
    <section className={classes.ServiceCard}>
      <img src={props.image} alt={props.label} />
      {CardElement}
    </section>
  )
}

export default ServiceCard
