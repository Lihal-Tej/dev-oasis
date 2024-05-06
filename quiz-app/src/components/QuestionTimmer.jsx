import { useState, useEffect, useCallback } from "react";

const QuestionTimmer = ({ timeOut, onTimeOut, mode }) => {

    const [progress, setProgress] = useState(timeOut);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onTimeOut();
        }, timeOut);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [timeOut, onTimeOut]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prev => {
                return prev - 100;
            });
        }, 100);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return <progress id="question-time" value={progress} max={timeOut} className={mode} />
}


export default QuestionTimmer;