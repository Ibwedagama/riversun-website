import React from 'react'
import classes from './MainForm.module.css'
import Button from '../Buttons/PrimaryButton'
import CloseIcon from '@material-ui/icons/Close'

const MainForm = (props) => {
  return (
    
      <section className={classes.MainForm}>
        <div className={classes.CloseButton}>
          <CloseIcon onClick={props.closeModal} />
        </div>
        <h1 className={classes.Title}>Lets Talk</h1>
        <p className={classes.Subtitle}>
          Hi! We’d love to know more about you, so feel free to message us!
        </p>
        <div className={classes.InputElement}>
          <div>
            <p className={classes.Label}>Your Name</p>
            <input
              className={classes.InputForm}
              type='text'
              placeholder='John Doe'
            />
          </div>
          <div>
            <p className={classes.Label}>Your Email</p>
            <input
              className={classes.InputForm}
              type='email'
              placeholder='example@mail.com'
            />
          </div>
          <div>
            <p className={classes.Label}>Your Company</p>
            <input
              className={classes.InputForm}
              type='text'
              placeholder='Your awesome company'
            />
          </div>
          <div>
            <p className={classes.Label}>Subject</p>
            <input
              className={classes.InputForm}
              type='text'
              placeholder='Hello riversun studio'
            />
          </div>
        </div>
        <div className={classes.FullWidth}>
          <p className={classes.Label}>Your Message</p>
          <textarea
            className={classes.TextArea}
            name=''
            id=''
            rows='5'
            placeholder={`Let's have a conversation :)`}
          ></textarea>
        </div>
        <div className={classes.Buttons}>
          <Button fourth={true} label='SEND MESSAGE' icon={true} />
          <p className={classes.Subtitle} style={{ marginBottom: '0' }}>
            Or
          </p>
          <Button secondary={true} label='WHATSAPP US' whatsapp={true} />
        </div>
        </section>
  )
}

export default MainForm
