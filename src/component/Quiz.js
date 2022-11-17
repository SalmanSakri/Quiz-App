import React, { useState } from 'react'
// import { isHtmlElement } from 'react-router-dom/dist/dom';

const Quiz = () => {

    const QuestionBank = [
        {
            Question: "What is the capital of India",
            AnswerText: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Mumbai", isCorrect: false },
                { Answer: "Gujrat", isCorrect: false },
                { Answer: "Goa", isCorrect: false },
            ]
        },
        {
            Question: "Who Is the PM of India?",
            AnswerText: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Modi", isCorrect: true },
                { Answer: "Kejri wal", isCorrect: false },
                { Answer: "Lalu", isCorrect: false },
            ]
        },
        {
            Question: "5+6 =?",
            AnswerText: [
                { Answer: "10", isCorrect: false },
                { Answer: "12", isCorrect: false },
                { Answer: "13", isCorrect: false },
                { Answer: "11", isCorrect: true },
            ]
        },
        {
            Question: "Which national Animal India",
            AnswerText: [
                { Answer: "Lion", isCorrect: true },
                { Answer: "Tiger", isCorrect: false },
                { Answer: "Elephant", isCorrect: false },
                { Answer: "Pecock", isCorrect: false },
            ]
        }
    ]
    // console.log(QuestionBank)
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setshowScore] = useState(0);

    const isCorrectResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QuestionBank.lenght) {
            setcurrentQuestion(nextQuestion);
        } else {
            setshowScore(true)
        }
    }

    const resetQuiz = () => {
        setcurrentQuestion(0);
        setScore(0);
        setshowScore(false);
    }


    return (
        <div>
            {showScore ? (
                <div>
                    you have scored {score} out of {QuestionBank.lenght}
                    <>
                        <button type='sumbit' onClick={resetQuiz}>Play Again</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div>
                            <div>
                                <span>{currentQuestion + 1}</span>/{QuestionBank.lenght}
                            </div>

                            <div>
                                {QuestionBank[currentQuestion].Question}
                            </div>
                        </div>


                        <div>
                            {
                            QuestionBank[currentQuestion].Answer.map((answer) =>
                            (
                                <button onClick={() => isCorrectResponse(answer.isCorrect)}>sumbit</button>
                            ))}
                        </div>

                    </>
                )

            }
        </div>
    )
}

export default Quiz