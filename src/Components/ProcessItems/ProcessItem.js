import classes from './ProcessItem.module.css'
function ProcessItem(props) {
  return (
    <section className={classes.ProcessItem}>
      <img src={props.source} alt={props.label} classname={classes.Image} />
      <h2 className={classes.Title}>{props.title}</h2>
      <p className={classes.Subtitle}>{props.subtitle}</p>
    </section>
  )
}

export default ProcessItem
