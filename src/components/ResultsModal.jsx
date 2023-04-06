import "./ResultsModal.css"
import { Link } from "react-router-dom"

const ResultsModal = (props) => {
    return (
        <div className="modal-background">
            <div className="modal-body">
                <p className="modal-title">Game finished! 🎉</p>
                <p>You've finished the game in {props.secondsPassed} seconds</p>
                <p>During the game you've rolled the dice <strong>{props.timesRolled}</strong> times</p>
                <Link to={"/"}>
                    <button className="modal-btn">
                        Return to main menu
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ResultsModal