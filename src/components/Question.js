import { shuffle } from "lodash";
import { nanoid } from 'nanoid'

export default function Question(props) {
    console.log(props)
    const shuffledAnswers = shuffle([...props.wrongOptions, props.correctOption]);
    console.log(shuffledAnswers);

    const options = shuffledAnswers.map(answer => {
        return (
            <div key={nanoid()}>
                <input
                    id={answer}
                    name={answer}
                    value={answer}
                    type="radio"
                />
                <label
                    htmlFor={answer}>
                    {answer}
                </label>
            </div>
        )
    })

    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="options">
            {options}
            </div>
        </div>
    )
}