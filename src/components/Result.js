export default function Results(props) {

    return (
        <div className="result">
            <button className="done-button" onClick={props.handleClick}>
                I'm Done
            </button>
            {props.score && <p>You scored {props.score}/5</p>}
        </div>
    )
}