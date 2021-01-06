import ServiceSatu from '../../Assets/ServiceSatu.webp'
import ServiceDua from '../../Assets/ServiceDua.webp'
import ProjectSatu from '../../Assets/FP1.webp'
import ProjectDua from '../../Assets/FP2.webp'
import ProjectTiga from '../../Assets/FP3.webp'
import iconResearch from '../../Assets/icon_research.webp'
import iconDesign from '../../Assets/icon_design.webp'
import iconDevelopment from '../../Assets/icon_dev.webp'
import iconTesting from '../../Assets/icon_testing.webp'
import classes from './MainSection.module.css'
import ProcessItem from '../ProcessItems/ProcessItem'
import ServiceCard from '../ServiceCard/ServiceCard'
import ProjectCard from '../ProjectCard/ProjectCard'
import PrimaryButton from '../Buttons/PrimaryButton'

function MainSection(props) {
	return (
		<main>
			<section className={classes.TwoColumn}>
				<h1 className={classes.Title} style={{ maxWidth: '285px' }} data-aos='fade-up'>
					<span className={classes.Numbering}>01</span>
					Who We Are
				</h1>
				<p className={classes.Subtitle} style={{ paddingTop: '3rem' }}>
					We are a team of passionate UI/UX Designer, and we believe with the right design and strong collaboration, we
					can support your brand growth and help you fulfill your vision and goals.
				</p>
			</section>
			<section className={classes.OneColumn} style={{ justifyItems: 'center' }}>
				<h1 className={classes.Title} data-aos='fade-up'> 
					<span className={classes.Numbering}>02</span>What We Make
				</h1>
				<p className={classes.Subtitle}>Some of the services we can discuss together</p>
			</section>
			<div className={classes.ServiceCard}>
				<ServiceCard
					image={ServiceSatu}
					label='UX Research'
					title='UI/UX Design'
					subtitle='The right design will make you easier to achieve your 
          goals in the future. By considerin . . .'
					fulldesc='The right design will make you easier to achieve your goals in the future. By considering UX ( User Experience ) you can create a website or applications that not only work but are also  comfortable and friendly for the users'
					showService={props.ShowServiceOne}
					toggleService={props.ToggleServiceOne}
				/>
				<ServiceCard
					image={ServiceDua}
					label='Website Development'
					title='Web Development'
					subtitle='The website will make you easier to reach new customers
          in this digital era. Show wh . . .'
					fulldesc='The website will make you easier to reach new customers
          in this digital era. Show who you are with a website that describes your self-image. Lets discuss with us about 
         your dream website, and lets make it happen together'
					showService={props.ShowServiceTwo}
					toggleService={props.ToggleServiceTwo}
				/>
			</div>
			<section className={classes.OneColumn}>
				<h1 className={classes.Title} data-aos='fade-up'>
					<span className={classes.Numbering}>03</span>How We Work
				</h1>
				<p className={classes.Subtitle}>The right solution come out from the right process</p>
			</section>
			<section className={classes.Process}>
				<ProcessItem
					source={iconResearch}
					label='UI/UX Research'
					title='Research'
					subtitle='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
				></ProcessItem>
				<ProcessItem
					source={iconDesign}
					label='UI/UX Design'
					title='Design'
					subtitle='Our design has your users in mind, the humans behind the screen. We follow User-centered Design thinking to make sure every design provides the best User Experience possible.'
				></ProcessItem>
				<ProcessItem
					source={iconDevelopment}
					label='Web Development'
					title='Development'
					subtitle='We will bring life to the design we create together, with the latest web technology that not only fast and secure but also reliable. '
				></ProcessItem>
				<ProcessItem
					source={iconTesting}
					label='User Testing'
					title='Testing'
					subtitle='To make sure that we’ve hit all the checkmarks, we love to do user testing with some of your potential customers. This will help us determine what’s good and what’s can be improved.'
				></ProcessItem>
			</section>
			<section className={classes.OneColumn}>
				<h1 className={classes.Title} data-aos='fade-up'>
					<span className={classes.Numbering}>04</span>Featured Project
				</h1>
				<p className={classes.Subtitle}>Some of the projects we've made with our amazing clients</p>
			</section>
			<section className={classes.Projects}>
				<ProjectCard
					image={ProjectSatu}
					title='Our Journey With Plant Story App'
					tags='STUDY CASE #1'
					article='/'
				></ProjectCard>
				<ProjectCard
					image={ProjectDua}
					title='Redesign Estate Firm Website'
					tags='STUDY CASE #2'
					article='/'
				></ProjectCard>
				<ProjectCard
					image={ProjectTiga}
					title='Inventory System for Shockcult Brand'
					tags='STUDY CASE #3'
					article='/'
				></ProjectCard>
			</section>
			<div className={classes.ProjectCTA}>
				<PrimaryButton label='MORE PROJECT' icon={true} secondary={true} link='/portfolio' />
			</div>
		</main>
	)
}

export default MainSection
