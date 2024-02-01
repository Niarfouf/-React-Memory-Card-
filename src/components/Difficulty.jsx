export default function Difficulty({ handleDifficulty }) {
    return (
        <div className="difficulty-container">
            <h2>Choose your difficulty :</h2>
            <div className="button-container">
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(8)}
                >
                    <p>Easy</p>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"></img>
                </button>
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(14)}
                >
                    <p>Medium</p>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png"></img>
                </button>
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(20)}
                >
                    <p>Hard</p>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png"></img>
                </button>
            </div>
        </div>
    )
}
