import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div> // The key here is the 'children'
}

export default Card