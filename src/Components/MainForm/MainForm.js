import React, { Component } from 'react'
import classes from './MainForm.module.css'
import Button from '../Buttons/PrimaryButton'
import CloseIcon from '@material-ui/icons/Close'
import FormAlert from '../FormAlert/FormAlert'
import emailjs from 'emailjs-com'

class MainForm extends Component {
	state = {
		EmailSubmitLoading: false,
		ShowAlert: false,
		SubmitError: false,
		name: '',
		email: '',
		company: '',
		subject: '',
		message: '',
	}

	SendEmail = (e) => {
		e.preventDefault()
		this.setState((prevState) => ({
			EmailSubmitLoading: !prevState.EmailSubmitLoading,
		}))
		// 'user_wJwanmXN8wIV1drPmPJvf'
		emailjs
			.sendForm('service_me0my3p', 'template_u6bo25h', e.target, 'user_wJwanmXN8wIV1drPmPJvf')
			.then(
				(result) => {
					this.setState({
						EmailSubmitLoading: false,
						ShowAlert: true,
						SubmitError: false,
						name: '',
						email: '',
						company: '',
						subject: '',
						message: '',
					})
					// alert("Thankyou for submiting, we'll contact you soon :)")
				},
				(error) => {
					this.setState({ EmailSubmitLoading: false, ShowAlert: true, SubmitError: true })
					// alert('Sorry something wrong accour')
				}
			)
	}

	nameChangeHandler = (e) => {
		this.setState({
			name: e.target.value,
		})
	}

	emailChangeHandler = (e) => {
		this.setState({
			email: e.target.value,
		})
	}

	companyChangeHandler = (e) => {
		this.setState({
			company: e.target.value,
		})
	}

	subjectChangeHandler = (e) => {
		this.setState({
			subject: e.target.value,
		})
	}

	messageChangeHandler = (e) => {
		this.setState({
			message: e.target.value,
		})
	}

	render() {
		let SubmitButton = null
		if (this.state.EmailSubmitLoading) {
			SubmitButton = <Button fourth label='SENDING MESSAGE...' />
		} else {
			SubmitButton = (
				<Button fourth label='SEND MESSAGE' icon type='submit' form='form-email-submit' />
			)
		}
		let DisplayAlert = null
		if (this.state.ShowAlert) {
			if (this.state.SubmitError) {
				DisplayAlert = (
					<FormAlert
						alertError
						alertTitle='Your message failed to send'
						alertSubtitle='Sorry there is an error in our message system :('
					/>
				)
			} else {
				DisplayAlert = (
					<FormAlert
						alertTitle='Your message send successfully'
						alertSubtitle='Our Team will respond your message soon, take a sit'
					/>
				)
			}
		}

		return (
			<section className={classes.MainForm}>
				<div className={classes.CloseButton}>
					<CloseIcon onClick={this.props.closeModal} />
				</div>
				<h1 className={classes.Title}>Lets Talk</h1>
				<p className={classes.Subtitle}>
					Hi! We’d love to know more about you, so feel free to message us!
				</p>
				<form onSubmit={this.SendEmail} id='form-email-submit'>
					<div className={classes.InputElement}>
						<div>
							<p className={classes.Label}>Your Name*</p>
							<input
								className={classes.InputForm}
								type='text'
								placeholder='John Doe'
								name='user_name'
								value={this.state.name}
								onChange={this.nameChangeHandler}
								required
							/>
						</div>
						<div>
							<p className={classes.Label}>Your Email*</p>
							<input
								className={classes.InputForm}
								type='email'
								placeholder='example@mail.com'
								name='user_email'
								value={this.state.email}
								onChange={this.emailChangeHandler}
								required
							/>
						</div>
						<div>
							<p className={classes.Label}>Your Company</p>
							<input
								className={classes.InputForm}
								type='text'
								placeholder='Your awesome company'
								name='user_company'
								value={this.state.company}
								onChange={this.companyChangeHandler}
							/>
						</div>
						<div>
							<p className={classes.Label}>Subject*</p>
							<input
								className={classes.InputForm}
								type='text'
								placeholder='Hello riversun studio'
								name='user_subject'
								value={this.state.subject}
								onChange={this.subjectChangeHandler}
								required
							/>
						</div>
					</div>
					<div className={classes.FullWidth}>
						<p className={classes.Label}>Your Message*</p>
						<textarea
							className={classes.TextArea}
							name='user_message'
							id=''
							rows='5'
							placeholder={`Let's have a conversation :)`}
							value={this.state.message}
							onChange={this.messageChangeHandler}
							required
						></textarea>
					</div>

					{DisplayAlert}

					<div className={classes.Buttons}>
						{SubmitButton}
						<p className={classes.Subtitle} style={{ marginBottom: '0' }}>
							Or
						</p>
						<a
							href='https://wa.me/62895800287994?text=Hello%20Riversun%20Studio :)'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button secondary label='WHATSAPP US' whatsapp type='button' />
						</a>
					</div>
				</form>
			</section>
		)
	}
}

export default MainForm
