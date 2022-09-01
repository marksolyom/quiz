export default function Start(props) {
    return (
        <div className="start">
            <h1>Gaming Quiz</h1>
            <p>Test your video game knowledge!</p>
            <button className="go-button" onClick={props.handleClick}>Let's Go</button>
        </div>
    )
}