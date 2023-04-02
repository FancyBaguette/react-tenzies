import {useState, useEffect} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import "./App.css"

const App = () => {

    const allNewDice = () => {
      return Array.from({length: 10}, () => {
        return {
            value: Math.floor(Math.random()*6)+1,
            isHeld: false
        }
      });
    }

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    
    useEffect(() => {
      if (dice.every(die => dice[0].value === die.value && die.isHeld)) {
        setTenzies(prevTenzies => true)
        alert('You won!')
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
    }
    
    const holdDice = (id) => {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    const diceElements = dice.map(die => (
      <Die 
          key={die.id} 
          value={die.value} 
          isHeld={die.isHeld} 
          holdDice={() => holdDice(die.id)}
      />
    ))

    
    return (
      <div className="webpage-container">
        <main>
            {tenzies && <Confetti width={1903} height={955}/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
              {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={() => {
                    if (tenzies) {
                        setTenzies(prevTenzies => false)
                        setDice(prevDice => allNewDice())
                    } else {
                        rollDice()
                    }
                }}
                
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
      </div>
    )
}

export default App