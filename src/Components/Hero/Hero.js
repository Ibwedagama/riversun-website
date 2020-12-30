import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import HeroImage from '../../Assets/hero_illustration.webp'
import classes from './Hero.module.css'

function Hero() {
  return (
		<section>
			<div className={classes.Content}>
				<div className={classes.Left}>
					<h1 className={classes.MainHeader}>Welcome To Riversun</h1>
					<p className={classes.Subtitle}>
						We are a team of passionate UI/UX Designer and Website Developer. We will be happy to collaborate with you
						and create something amazing!
					</p>
					<PrimaryButton label='KNOW MORE' primary={true} icon={true} scrollTo='MainSection' />
				</div>

				<div className={classes.Right}>
					<img src={HeroImage} alt='Riversun Collaboration Illustration' className={classes.Illustration} />
				</div>
			</div>
		</section>
	)
}

export default Hero
