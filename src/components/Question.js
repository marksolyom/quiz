import { shuffle } from "lodash";

export default function Question(props) {
    console.log(props)
    const shuffledAnswers = shuffle([...props.wrongOptions, props.correctOption]);
    console.log(shuffledAnswers);

    

    return (
        <div className="question">
            <p>{props.question}</p>
        </div>
    )
}

/*
export default function Question(props) {

    console.log(props)

    const correct = props.questions.results[0].correct_answer;
    const incorrect1 = props.questions.results[0].incorrect_answers[0];
    const incorrect2 = props.questions.results[0].incorrect_answers[1];
    const incorrect3 = props.questions.results[0].incorrect_answers[2];
    const question = props.questions.results[0].question;

    return (
        <div className="question">
            <p>{props.questions.results[0].question}</p>
            <div className="options">
                <p>{props.questions.results[0].correct_answer}</p>
                <p>{props.questions.results[0].incorrect_answers[0]}</p>
                <p>{props.questions.results[0].incorrect_answers[1]}</p>
                <p>{props.questions.results[0].incorrect_answers[2]}</p>
            </div>
        </div>
    )

    
        < div className = "question" >
            <p>{question}</p>
            
                <input
                    id={correct}
                    name={question}
                    type="radio"
                />
                <label
                    htmlFor={correct}>
                    {correct}
                </label>
                <input
                    id={incorrect1}
                    name={question}
                    type="radio"
                />
                <label
                    htmlFor={incorrect1}>
                    {incorrect1}
                </label>
                <input
                    id={incorrect2}
                    name={question}
                    type="radio"
                />
                <label
                    htmlFor={incorrect2}>
                    {incorrect2}
                </label>
                <input
                    id={incorrect3}
                    name={question}
                    type="radio"
                />
                <label
                    htmlFor={incorrect3}>
                    {incorrect3}
                </label>
            </div>
        </div >
    )
    */