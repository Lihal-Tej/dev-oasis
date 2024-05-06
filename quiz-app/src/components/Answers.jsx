import { useRef } from "react";

const Answers = ({ answers, answeredState, selectedAnswer, onSelect }) => {
    const shuffledAnswers = useRef();

    const shuffleAnswers = (answers) => {
        if (!shuffledAnswers.current) {
            shuffledAnswers.current = [...answers];
            shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }
        return shuffledAnswers;
    }

    return <ul id="answers">
        {
            shuffleAnswers(answers).current.map(answer => {
                let cssClasses = '';
                const isSelected = answer === selectedAnswer;
                if (answeredState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if ((answeredState === 'correct' || answeredState === 'wrong') && isSelected) {
                    cssClasses = answeredState
                }

                return <li key={answer} className="answer">
                    <button
                        className={cssClasses}
                        onClick={() => { onSelect(answer) }}
                        disabled={answeredState != ''}
                    >
                        {answer}
                    </button>
                </li>
            })
        }
    </ul>
};

export default Answers;