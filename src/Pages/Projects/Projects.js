import React, { Component } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import InputSelect from '../../Components/InputSelect/InputSelect'
import ProjectSatu from '../../Assets/FP1.webp'

export class Projects extends Component {
	state = {
		showProject: 6,
	}
	componentDidMount() {}
	render() {
		return (
			<main className='Projects'>
				<section className='Header'>
					<h1 className='Title'>Our Works</h1>
				</section>
				<section className='Util'>
					<InputSelect
						name='category'
						label='Category'
						options={['All Project', 'Dummy Input 1', 'Dummy Input 2']}
					></InputSelect>
					<InputSelect name='sortby' label='Sort By' options={['Newest', 'Oldest']}></InputSelect>
				</section>
				<section className='Content'>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
					<ProjectCard
						image={ProjectSatu}
						title='Our Journey With Plant Story App'
						tags='STUDY CASE #1'
						article='/'
					></ProjectCard>
				</section>
			</main>
		)
	}
}

export default Projects
