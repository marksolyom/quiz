//import { shuffle } from "lodash";
import { nanoid } from 'nanoid'
//import { useEffect } from 'react';

export default function Question(props) {
    //shuffledAnswers = shuffle([...props.wrongOptions, props.correctOption]);
    //SHUFFLE DISABLED TEMPORARILY

    const shuffledAnswers = [...props.wrongOptions, props.correctOption];

    const choices = shuffledAnswers.map(answer => {
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
                                props.correctOption === answer && "green")) ||
                            (props.gameEnded &&
                                props.correctOption === answer &&
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