import { nanoid } from 'nanoid';

export default function Questions(props) {
    const choices = props.shuffled.map(answer => {
        return (
            <div className='radio-choice' key={nanoid()}>
                <input

                    id={answer}
                    name={props.question}
                    value={answer}
                    type="radio"
                    checked={props.selectedOptions.some(obj => obj.value === answer)}
                    onChange={props.handleChange}
                    disabled={props.gameEnded} 
                />
                <label
                    style={{
                        backgroundColor:
                            ((props.gameEnded &&
                                props.selectedOptions.some(obj => obj.value === answer) &&
                                props.correctAnswer === answer && "green")) ||
                            (props.gameEnded &&
                                props.correctAnswer === answer &&
                                props.selectedOptions.some(obj => obj.value !== answer) && "red")
                    }}
                    htmlFor={answer}>
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