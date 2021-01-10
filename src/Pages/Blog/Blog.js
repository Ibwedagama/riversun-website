import React, { Component } from 'react'
import './Blog.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import InputSelect from '../../Components/InputSelect/InputSelect'
import ProjectSatu from '../../Assets/FP1.webp'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet'

export class Blog extends Component {
	state = {
		showProject: 6,
	}
	componentDidMount() {
		window.scrollTo({ top: 0 })
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Riversun Studio - Blog</title>
					<meta
						name='description'
						content={`Here's everything we've learn so far about the industries, best practices and many more`}
					/>
				</Helmet>
				<main className='Blog'>
					<section className='Header'>
						<h1 className='Title'>Blog</h1>
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
						<p style={{ fontWeight: 'bold', marginBottom: '100px' }}>Sorry, there is no post yet</p>
					</section>
				</main>
				<Footer showModal={this.props.showModal}></Footer>
			</div>
		)
	}
}

export default Blog
