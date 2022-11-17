import React, { useState } from 'react'


const QuizApp = () => {
    const questions = [
        {
            questionText: "What is the capital of India",
            answerOptions: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Mumbai", isCorrect: false },
                { Answer: "Gujrat", isCorrect: false },
                { Answer: "Goa", isCorrect: false },
            ]
        },
        {
            questionText: "Who Is the PM of India?",
            answerOptions: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Modi", isCorrect: true },
                { Answer: "Kejri wal", isCorrect: false },
                { Answer: "Lalu", isCorrect: false },
            ]
        },
        {
            questionText: "5+6 =?",
            answerOptions: [
                { Answer: "10", isCorrect: false },
                { Answer: "12", isCorrect: false },
                { Answer: "13", isCorrect: false },
                { Answer: "11", isCorrect: true },
            ]
        },
        {
            questionText: "Which is national animal  of India",
            answerOptions: [
                { Answer: "Lion", isCorrect: false },
                { Answer: "tiger", isCorrect: true },
                { Answer: "peacock", isCorrect: false },
                { Answer: "elephant", isCorrect: false },
            ]
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setshowScore] = useState(false);
    const [score, setScore] = useState(0);


    const handleButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setshowScore(true)
        }
    }
    return (
        <div className='flex h-screen justify-center bg-white'>
            <div className='box bg-orange-600 w-10/12 rounded-xl '>
                <div className='flex justify-center m-3 '>
                    <h1 className='font-black text-2xl'> Quiz App</h1>
                </div>
                {showScore ? (<div className='flex justify-center font-bold '>You Scoret {score} out of {questions.length}</div>
                ) : (
                    <>
                        <div className=''>
                            <div className='flex justify-center font-semibold text-lg mb-2'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>

                            <div className='flex justify-center items-center font-semibold text-base mb-1'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            {questions[currentQuestion].answerOptions.map((answerOptions) =>

                                <button className='p-1 rounded-xl border-black border-2 m-1 w-1/3 cursor-pointer hover:bg-white hover:text-black hover:font-medium' onClick={() => handleButtonClick(answerOptions.isCorrect)}>{answerOptions.Answer}</button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default QuizApp