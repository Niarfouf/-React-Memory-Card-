import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import GameOver from './GameOver'
const url = 'https://pokeapi.co/api/v2/pokemon/'

export default function Game({
    difficulty,
    handleBestScore,
    handleDifficulty,
}) {
    const [score, setScore] = useState(0)
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [memory, setMemory] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [randomOrder, setRandomOrder] = useState(
        Array.from(Array(difficulty).keys())
    )

    function createIdArray(difficulty) {
        const idArray = []
        for (let i = 0; i < difficulty; i++) {
            let randomId
            do {
                randomId = Math.floor(Math.random() * 151)
            } while (idArray.includes(randomId))
            idArray.push(randomId)
        }
        return idArray
    }

    function handleScore(pokemonId) {
        if (!memory.includes(pokemonId)) {
            const shuffledArray = randomOrder.sort(() => Math.random() - 0.5)
            setRandomOrder(shuffledArray)
            setScore(score + 1)
            setMemory([...memory, pokemonId])
            if (memory.length === pokemonInfo.length) {
                handleBestScore(score)
                setIsGameOver(true)
            }
        } else {
            handleBestScore(score)
            setIsGameOver(true)
        }
    }

    useEffect(() => {
        async function fetchPokemon(id) {
            const response = await fetch(url + id + '/')
            const data = await response.json()
            return [id, data.name, data.sprites.front_default]
        }

        async function fetchPokemonArray(idArray) {
            const pokemonArray = await Promise.all(
                idArray.map((e) => fetchPokemon(e))
            )

            setPokemonInfo(pokemonArray)
        }
        const idArray = createIdArray(difficulty)
        fetchPokemonArray(idArray)
    }, [difficulty])

    return (
        <>
            {' '}
            {!isGameOver ? (
                <>
                    <div className="score">
                        <p>Actual score : {score}</p>
                    </div>
                    <div className="cards-grid">
                        {pokemonInfo.map((pokemon, index) => {
                            return (
                                <Card
                                    order={randomOrder[index]}
                                    key={pokemon[0]}
                                    pokemonId={pokemon[0]}
                                    pokemonName={pokemon[1]}
                                    imgUrl={pokemon[2]}
                                    handleScore={handleScore}
                                ></Card>
                            )
                        })}
                    </div>
                </>
            ) : (
                <GameOver
                    score={score}
                    maxScore={pokemonInfo.length}
                    changeDifficulty={handleDifficulty}
                ></GameOver>
            )}
        </>
    )
}
