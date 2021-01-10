import React, { Component } from 'react'
import MainSection from '../../Components/Main/MainSection'
import Hero from '../../Components/Hero/Hero'
import './Home.css'
import Footer from '../../Components/Footer/Footer'

class Home extends Component {
	state = {
		ShowServiceOne: false,
		ShowServiceTwo: false,
	}

	componentDidMount() {
		window.scrollTo({ top: 0 })
	}

	ServiceOneToggleHandler = () => {
		this.setState((prevState) => ({
			ShowServiceOne: !prevState.ShowServiceOne,
		}))
	}
	ServiceTwoToggleHandler = () => {
		this.setState((prevState) => ({
			ShowServiceTwo: !prevState.ShowServiceTwo,
		}))
	}
	render() {
		return (
			<main>
				<section className='Hero'>
					<Hero />
				</section>
				<section className='Transition' id='MainSection'></section>
				<section className='MainSection'>
					<MainSection
						ShowServiceOne={this.state.ShowServiceOne}
						ShowServiceTwo={this.state.ShowServiceTwo}
						ToggleServiceOne={this.ServiceOneToggleHandler}
						ToggleServiceTwo={this.ServiceTwoToggleHandler}
					/>
				</section>
				<Footer showModal={this.props.showModal}></Footer>
			</main>
		)
	}
}

export default Home
