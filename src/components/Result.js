export default function Results(props) {
    return (
        <div className="result">
            {props.quizStarted && !props.gameEnded && <button
                onClick={props.handleCheckResult}
            >
                I'm Done
            </button>}
            {props.score && <p className="score">Score: {props.score}/5</p>}
            {props.quizStarted && props.gameEnded && <button
                onClick={props.handleStartNewGame}
            >
                Play Again
            </button>}
        </div>
    )
}