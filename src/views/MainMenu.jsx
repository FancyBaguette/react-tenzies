import "./MainMenu.css"
import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <div className="homepage-wrapper">

            <h1 className="title">Tenzies</h1>

            <main className="info-boxes">
                <div className="info-box">
                <p className="info-box-title">❓ How to play</p>
                <p>
                    Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>
                </div>
                <div className="info-box">
                    <p className="info-box-title">🏆 Personal leaderboard</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </main>

            <Link className="btn-link" to={"/game"}>
                <button className="play-btn">PLAY</button>
            </Link>

        </div>
    )
}

export default MainMenu