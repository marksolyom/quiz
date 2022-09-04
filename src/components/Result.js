export default function Results(props) {
    return (
        <div className="result">
            {props.quizStarted && !props.gameEnded && <button
                className="done-button"
                onClick={props.handleCheckResult}
            >
                I'm Done
            </button>}
            {props.score && <p>You scored {props.score}/5</p>}
            {props.quizStarted && props.gameEnded && <button
                className="again-button"
                onClick={props.handleStartNewGame}
            >
                Play Again
            </button>}
        </div>
    )
}