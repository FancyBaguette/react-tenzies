import './Die.css'

const Die = (props) => {
    return (
        <div 
            className={`die-face ${props.isHeld ? "is-held" : ""}`}
            data-number={props.value}
            title={props.value}
            onClick={props.holdDice}
        />
    )
}

export default Die