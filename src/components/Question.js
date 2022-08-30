import { shuffle } from "lodash";
import { nanoid } from 'nanoid'

export default function Question(props) {
    const shuffledAnswers = shuffle([...props.wrongOptions, props.correctOption]);
    const options = shuffledAnswers.map(answer => {
        return (
            <div key={nanoid()}>
                <input
                    id={props.question}
                    name={props.question}
                    value={answer}
                    type="radio"
                    onChange={props.handleChange}
                />
                <label
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
            {options}
            </div>
        </div>
    )
}