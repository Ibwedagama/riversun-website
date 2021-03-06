import React, { Component } from 'react'
import MainSection from '../../Components/Main/MainSection'
import Hero from '../../Components/Hero/Hero'
import './Home.css'

class Home extends Component {
  state = {
    ShowServiceOne: false,
    ShowServiceTwo: false,
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
			</main>
		)
  }
}

export default Home
