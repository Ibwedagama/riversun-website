import React from 'react'
import classes from './NotFound.module.css'

function NotFound() {
	return (
		<div className={classes.NotFound}>
			<div className={classes.Center}>
				<div className={classes.Circle}></div>
				<h1 className={classes.Title}>Oopss!</h1>
			</div>
			<p className={classes.Subtitle}>404 Not Found</p>
			<p className={classes.Subtitle}>We can’t seem to find the page you’re looking for</p>
		</div>
	)
}

export default NotFound
