import React from 'react'
import classes from './InputSelect.module.css'

function InputSelect(props) {
	return (
		<div className={classes.InputSelect}>
			<label htmlFor={props.label} className={classes.Label}>
				{props.label}
			</label>
			<select name={props.name} id={props.name} className={classes.Select}>
				{props.options.map((opt) => {
					return (
						<option value={opt} className={classes.Options}>
							{opt}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default InputSelect
