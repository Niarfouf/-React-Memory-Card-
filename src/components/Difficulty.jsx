export default function Difficulty({ handleDifficulty }) {
    return (
        <div className="difficulty-container">
            <h2>Choose your difficulty :</h2>
            <div className="button-container">
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(8)}
                >
                    Easy
                </button>
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(14)}
                >
                    Medium
                </button>
                <button
                    className="difficulty-button"
                    onClick={() => handleDifficulty(20)}
                >
                    Hard
                </button>
            </div>
        </div>
    )
}
