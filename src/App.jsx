import './App.css'
import { useState } from 'react'
import Difficulty from './components/Difficulty'
import Game from './components/Game'

export default function App() {
    const [difficulty, setDifficulty] = useState(null)
    const [bestScore, setBestScore] = useState(0)

    function handleBestScore(newBestScore) {
        if (bestScore < newBestScore) {
            setBestScore(newBestScore)
        }
    }

    return (
        <>
            <div className="header">
                <img
                    alt="pokemon"
                    className="main-title"
                    src="/pokemon-23.svg"
                ></img>
                <h1> Memory Game</h1>
                <p className="description">
                    Click on every image only once to win the game, every time
                    you click images will be placed randomly.
                </p>
                <div className="score-container">
                    <p className="best-score">Best score : {bestScore}</p>
                </div>
            </div>

            <div className="main-content">
                {!difficulty ? (
                    <Difficulty handleDifficulty={setDifficulty}></Difficulty>
                ) : (
                    <Game
                        difficulty={difficulty}
                        handleBestScore={handleBestScore}
                        handleDifficulty={setDifficulty}
                    ></Game>
                )}
            </div>
        </>
    )
}
