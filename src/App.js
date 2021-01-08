import React, { Component } from 'react'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import SideDrawer from './Components/Navbar/SideDrawer/SideDrawer'
import Footer from './Components/Footer/Footer'
import MainForm from './Components/MainForm/MainForm'
import Modal from 'react-modal'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'

Modal.setAppElement('#root')

class App extends Component {
	state = {
		SideDrawerOpen: false,
		MainFormOpen: false,
		BodyHeight: null,
		EmailSubmitLoading: false,
	}

	componentDidMount() {
		Aos.init({ duration: 550, once: true, delay: 150 })
		this.GetBodyHeight()
	}

	SideDrawerToggleHandler = () => {
		this.setState((prevState) => ({
			SideDrawerOpen: !prevState.SideDrawerOpen,
		}))
	}
	CloseDrawerHandler = () => {
		this.setState({ SideDrawerOpen: false })
	}

	MainFormToggleHandler = () => {
		this.setState((prevState) => ({
			MainFormOpen: !prevState.MainFormOpen,
		}))
		this.setState({ SideDrawerOpen: false })
	}
	CloseMainFormHandler = () => {
		this.setState({ MainFormOpen: false })
	}

	GetBodyHeight = () => {
		const elem = document.querySelector('#footer-cta')
		if (elem) {
			const rect = elem.getBoundingClientRect()
			this.setState({ BodyHeight: rect.top })
		}
	}

	SendEmail = (e) => {
		e.preventDefault()
		this.setState((prevState) => ({
			EmailSubmitLoading: !prevState.EmailSubmitLoading,
		}))
		emailjs.sendForm('service_me0my3p', 'template_u6bo25h', e.target, 'user_wJwanmXN8wIV1drPmPJvf').then(
			(result) => {
				this.setState({ EmailSubmitLoading: false })
				alert("Thankyou for submiting, we'll contact you soon :)")
				e.target.reset()
			},
			(error) => {
				this.setState({ EmailSubmitLoading: false })
				alert('Sorry something wrong accour')
			}
		)
	}

	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar
						ToggleSideDrawer={this.SideDrawerToggleHandler}
						ToggleModal={this.MainFormToggleHandler}
						BodyHeight={this.state.BodyHeight}
					/>
					<SideDrawer
						show={this.state.SideDrawerOpen}
						CloseHandler={this.CloseDrawerHandler}
						showModal={this.MainFormToggleHandler}
					/>
					<Modal
						isOpen={this.state.MainFormOpen}
						onRequestClose={this.MainFormToggleHandler}
						closeTimeoutMS={500}
						style={{
							overlay: {
								position: 'fixed',
								display: 'flex',
								justifyContent: 'center',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: 'rgba(0, 0, 0, 0.6)',
								zIndex: 9999,
							},
							content: {
								position: 'relative',
								borderRadius: 'none',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								padding: 0,
							},
						}}
					>
						<MainForm
							closeModal={this.MainFormToggleHandler}
							sendEmail={this.SendEmail}
							loading={this.state.EmailSubmitLoading}
						></MainForm>
					</Modal>

					<Switch>
						<Route path='/blog' exact component={Home} />
						<Route path='/portfolio' exact component={Projects} />
						<Route path='/' exact component={Home} />
					</Switch>

					<Footer showModal={this.MainFormToggleHandler}></Footer>
				</div>
			</Router>
		)
	}
}

export default App
