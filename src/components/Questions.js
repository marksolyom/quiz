import { nanoid } from 'nanoid';

export default function Questions(props) {
    const choices = props.answers.map(answer => {
        return (
            <div className='choice' key={nanoid()}>
                <input
                    id={answer+props.question}
                    name={props.question}
                    value={answer+props.question}
                    type="radio"
                    checked={props.selectedOptions.some(obj => obj.value === answer+props.question)}
                    onChange={props.handleChange}
                    disabled={props.gameEnded} 
                />
                <label
                    style={{
                        backgroundColor:
                            ((props.gameEnded &&
                                props.selectedOptions.some(obj => obj.value === answer+props.question) &&
                                props.correctAnswer === answer && "#00a000")) ||
                            (props.gameEnded &&
                                props.correctAnswer === answer &&
                                props.selectedOptions.some(obj => obj.value !== answer+props.question) && "#c80000")
                    }}
                    htmlFor={answer+props.question}>
                    {answer}
                </label>
            </div>
        )
    })

    return (
        <div className="quiz">
            <p>{props.question}</p>
            <div className="options">
                {choices}
            </div>
            <hr />
        </div>
    )
}