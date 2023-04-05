import {useState, useEffect} from "react"
import useViewportSize from "../hooks/useViewportSize"
import {nanoid} from "nanoid"
import Die from "../components/Die"
import Confetti from "react-confetti"
import ResultsModal from "../components/ResultsModal"
import { Portal } from "react-portal"
import "./Game.css"

const Game = () => {

    const allNewDice = () => {
      return Array.from({length: 10}, () => {
        return {
            value: Math.floor(Math.random()*6)+1,
            isHeld: false,
            id: nanoid()
        }
      });
    }

    const [dice, setDice] = useState(allNewDice())
    const [timesRolled, setTimesRolled] = useState(0)
    const [tenzies, setTenzies] = useState(true)
    const viewportSize = useViewportSize()
    
    useEffect(() => {
      if (dice.every(die => dice[0].value === die.value && die.isHeld)) {
        setTenzies(prevTenzies => true)
        console.log('You won')
      }
    }, [dice])

    const generateNewDie = () => {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    const rollDice = () => {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
        setTimesRolled(prevTimesRolled => prevTimesRolled + 1)
    }
    
    const holdDice = (id) => {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    return (
      <main className="game-wrapper">
          {tenzies && <Confetti width={viewportSize.width} height={viewportSize.height}/>}
          <div className="dice-container">
            { dice &&
              dice.map(die => (
                <Die 
                    key={die.id} 
                    value={die.value} 
                    isHeld={die.isHeld} 
                    holdDice={() => holdDice(die.id)}
                />
              ))
            }
          </div>
          <div className="game-bar">
            <button 
                className="roll-btn" 
                onClick={() => {
                    if (tenzies) {
                        setTenzies(prevTenzies => false)
                        setDice(prevDice => allNewDice())
                    } else {
                        rollDice()
                    }
                }}
                
            >
                ROLL
            </button>
          </div>
          {
            tenzies && <Portal><ResultsModal timesRolled={timesRolled}/></Portal>
          }
        </main>
    )
}

export default Game