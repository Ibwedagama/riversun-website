import React from 'react'
import classes from './ProjectCard.module.css'
import Button from '../Buttons/PrimaryButton'

function ProjectCard(props) {
  return (
		<div className={classes.Card}>
			<img src={props.image} alt={props.label} />
			<div className={classes.CardTitle}>
				<h3 className={classes.Title}>{props.title}</h3>
			</div>
			<div className={classes.Overlay}>
				<p className={classes.Tags}>{props.tags}</p>
				<h3 className={classes.Title}>{props.title}</h3>
				<Button label='LEARN MORE' icon third link={props.article} />
			</div>
		</div>
	)
}

export default ProjectCard
