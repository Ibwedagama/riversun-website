import React from 'react'
import classes from './Footer.module.css'
import Button from '../Buttons/PrimaryButton'
import InstagramIcon from '@material-ui/icons/Instagram'

function Footer(props) {
  return (
    <>
      <section className={classes.Footer}>
        <h1 className={classes.Title}>So, what do you think?</h1>
        <h1 className={classes.Subtitle}>
          We'd love to <span className={classes.Underline}>chat</span> with you.
        </h1>
        <h1 className={classes.Title}></h1>
        <Button label='LETS TALK' icon={true} primary={true} />
        <div className={classes.SocialLink}>
          <div className={classes.SocialItems}>
            <InstagramIcon></InstagramIcon>
          </div>
          <div className={classes.SocialItems}>
            <InstagramIcon></InstagramIcon>
          </div>
          <div className={classes.SocialItems}>
            <InstagramIcon></InstagramIcon>
          </div>
          <div className={classes.SocialItems}>
            <InstagramIcon></InstagramIcon>
          </div>
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
