export default function GameOver({
    score,
    maxScore,
    changeDifficulty,
    resetDifficulty,
}) {
    return (
        <div className="game-over-container">
            {score === maxScore ? (
                <p>
                    You caught them all! You are a strong trainer like Ash
                    Ketchum!
                </p>
            ) : (
                <p>
                    You lose but caught {score} pokemon out of {maxScore} in the
                    area. Congrats!
                </p>
            )}

            <button onClick={() => changeDifficulty(null)}>
                Chose difficulty
            </button>
        </div>
    )
}
