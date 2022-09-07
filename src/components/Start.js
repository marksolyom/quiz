export default function Start(props) {
    return (
        <div className="start">
            <h1>Quiz</h1>
            <p>Test your mythology knowledge!</p>
            <button onClick={props.handleClick}>Let's Go!</button>
        </div>
    )
}