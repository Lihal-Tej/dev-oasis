import { useState, useCallback } from "react";
import Questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestion = userAnswers.length;

    const handleSlectedAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSlectedAnswer(null);
    }, [handleSlectedAnswer]);

    return <div id="quiz">
        {
            activeQuestion >= Questions.length ?
                <Summary userAnswers={userAnswers} />
                :
                <Question
                    key={activeQuestion}
                    index={activeQuestion}
                    handleSkipAnswer={handleSkipAnswer}
                    handleSelect={handleSlectedAnswer}
                />
        }

    </div>
}

export default Quiz;