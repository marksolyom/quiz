//import { shuffle } from "lodash";
import { nanoid } from 'nanoid'

export default function Question(props) {

    //const shuffledAnswers = shuffle([...props.wrongOptions, props.correctOption]);
    //SHUFFLE DISABLED TEMPORARILY

    const shuffledAnswers = [...props.wrongOptions, props.correctOption];

    const choices = shuffledAnswers.map(answer => {
        return (
            <div key={nanoid()}>
                <input
                    id={answer}
                    name={props.question}
                    value={answer}
                    type="radio"
                    checked={props.selectedOptions.some(obj => obj.value === answer)}
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
                {choices}
            </div>
            <hr />
        </div>
    )
}