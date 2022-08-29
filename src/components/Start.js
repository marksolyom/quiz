export default function Start(props) {
    return (
        <div class="start">
            <h1>Gaming Quiz</h1>
            <p>Test your video game knowledge!</p>
            <button onClick={props.handleClick}>Let's Go</button>
        </div>
    )
}