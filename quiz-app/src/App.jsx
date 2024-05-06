import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { useState } from "react";

function App() {

    const [started, setStarted] = useState(false);
    const startQuizHandler = () => {
        setStarted(true);
    }

    let buttonStyle = { background: 'rgba(80,103,232)', color: 'white', padding: '5px', border: '2px', cursor: 'pointer', boxShadow: '2px 2px 2px 2px rgba(86,74,212)' };

    return <>
        <Header />
        <main>
            {
                started ?
                    <Quiz startQuiz = {startQuizHandler}/>
                    :
                    <div id="quiz">
                        <button style={buttonStyle} onClick={startQuizHandler}><h3>Start Quiz</h3></button>
                    </div>
            }
        </main>
    </>
}

export default App;
