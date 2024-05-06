import { useState } from "react";
import Answers from "./Answers";
import Questions from "../questions";
import QuestionTimmer from "./QuestionTimmer";

const Question = ({ index, handleSkipAnswer,
    handleSelect
}) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timmer = 10000;

    if (answer.selectedAnswer) {
        timmer = 1000;
    }

    if (answer.isCorrect != null) {
        timmer = 2000;
    }

    const handleOnSelect = answer => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: Questions[index].answers[0] === answer
            })

            setTimeout(() => {
                handleSelect(answer);
            }, 2000);

        }, 1000);
    }

    let answeredState = '';

    if (answer.selectedAnswer && answer.isCorrect != null) {
        answeredState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answeredState = 'answered';
    }

    return <div id="question">
        <QuestionTimmer
            key={timmer}
            timeOut={timmer}
            onTimeOut={answer.selectedAnswer === '' ? handleSkipAnswer : () => { }}
            mode={answeredState}
        />
        <h2>{Questions[index].text}</h2>
        <Answers
            answers={Questions[index].answers}
            answeredState={answeredState}
            selectedAnswer={answer.selectedAnswer}
            onSelect={handleOnSelect}
        />
    </div>
}

export default Question;