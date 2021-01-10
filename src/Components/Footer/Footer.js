import React from 'react'
import classes from './Footer.module.css'
import Button from '../Buttons/PrimaryButton'
// import InstagramIcon from '@material-ui/icons/Instagram'
import InstagramIcon from '../../Assets/icon/ig.webp'
import BehanceIcon from '../../Assets/icon/behance.webp'
import DribbbleIcon from '../../Assets/icon/dribbble.webp'
import LinkedinIcon from '../../Assets/icon/linkedin.webp'
// import { NavLink } from 'react-router-dom'

function Footer(props) {
	return (
		<>
			<section className={classes.Footer}>
				<h1 className={classes.Title} data-aos='fade-up'>
					So, what do you think?
				</h1>
				<h1 className={classes.Subtitle} data-aos='fade-up' data-aos-delay='150' id='footer-cta'>
					We'd love to <span className={classes.Underline}>chat</span> with you.
				</h1>
				<div className={classes.FooterCTA}>
					<Button label={`LET'S TALK`} icon primary toggle initToggle={props.showModal} />
				</div>
				<div className={classes.SocialLink}>
					<a
						href='https://www.instagram.com/riversunstudio/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className={classes.SocialItems}>
							<img
								src={InstagramIcon}
								alt='Instagram Icon'
								style={{
									maxWidth: '20px',
								}}
							/>
						</div>
					</a>
					<a
						href='https://dribbble.com/riversunstudio/shots'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className={classes.SocialItems}>
							<img
								src={DribbbleIcon}
								alt='Dribbble Icon'
								style={{
									maxWidth: '20px',
								}}
							/>
						</div>
					</a>
					<a
						href='https://www.behance.net/riversunstudio'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className={classes.SocialItems}>
							<img
								src={BehanceIcon}
								alt='Behance Icon'
								style={{
									maxWidth: '22px',
								}}
							/>
						</div>
					</a>
					<a
						href='https://www.linkedin.com/company/riversunstudio'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className={classes.SocialItems}>
							<img
								src={LinkedinIcon}
								alt='Linkedin Icon'
								style={{
									maxWidth: '18px',
								}}
							/>
						</div>
					</a>
				</div>
			</section>
			<div className={classes.Copywrite}>
				<p>
					<span> &#169;</span>
					<strong>Riversun</strong> 2020 All Right Reserved
				</p>
			</div>
		</>
	)
}

export default Footer
