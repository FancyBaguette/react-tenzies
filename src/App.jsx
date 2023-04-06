import "./App.css"
import MainMenu from "./views/MainMenu/MainMenu"
import Game from "./views/Game/Game"
import PersonalLeaderboard from "./views/PersonalLeaderboard/PersonalLeaderboard"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

const App = () => {

    const [personalLeaderboard, setPersonalLeaderboard] = useState(
      () => JSON.parse(localStorage.getItem("personalLeaderboard")) || []
    )

    useEffect(() => {
      localStorage.setItem("personalLeaderboard", JSON.stringify(personalLeaderboard))
    },[personalLeaderboard])

    return (
      <div className="webpage-container">
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/leaderboard" element={<PersonalLeaderboard personalLeaderboard={personalLeaderboard} setPersonalLeaderboard={setPersonalLeaderboard}/>}/>
          <Route path="/game" element={<Game personalLeaderboard={personalLeaderboard} setPersonalLeaderboard={setPersonalLeaderboard}/>}/>
        </Routes>
      </div>
    )
}

export default App