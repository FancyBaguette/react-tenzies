const Die = (props) => {
    return (
        <div 
            className={`die-face${props.isHeld ? " is-held" : ""}`} 
            onClick={props.holdDice}
        >
            <p className="die-num">{props.value}</p>
        </div>
    )
}

export default Die