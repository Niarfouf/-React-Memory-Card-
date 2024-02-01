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

            <button
                className="play-again-button"
                onClick={() => changeDifficulty(null)}
            >
                Play again !
            </button>
        </div>
    )
}
