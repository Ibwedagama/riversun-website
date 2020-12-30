import React from 'react'
import classes from './ServiceCard.module.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

function ServiceCard(props) {
	let CardElement = (
		<div className={classes.CardElement}>
			<div className={classes.Info}>
				<h3 className={classes.Title}>{props.title}</h3>
				<p className={classes.Subtitle}>{props.subtitle}</p>
			</div>
			<div className={classes.ExpandButton}>
				<button onClick={props.toggleService}>
					<p className={classes.Button}>Show More</p>
				</button>
			</div>
		</div>
	)

	if (props.showService) {
		CardElement = (
			<div className={classes.CardElement}>
				<div className={classes.InfoExpand}>
					<h3 className={classes.Title}>{props.title}</h3>
					<p className={classes.Subtitle}>{props.fulldesc}</p>
				</div>
				<div className={classes.ExpandButton}>
					<button onClick={props.toggleService}>
						<p className={classes.Button}>Show Less</p>
					</button>
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
