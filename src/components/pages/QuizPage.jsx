import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"; 
// import { FaQuestionCircle } from "react-icons/fa";

import '../../styles/pages/QuizPage.css'
import {useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';



const QuizPage = () => {
    const [open,setOpen] = useState(false);
    const {quizData} = useQuiz()
    const navigate = useNavigate();
    // const [currentIndex,setCrrentIndex] = useState(0)
  return (
    <>
        <div className='quest-box'>
            <div className='quiz-top'>
                <h2>Level :{quizData.difficulty}</h2>
                <RxCross2 size={24} onClick={() => navigate(-1)}/>
            </div>
            <div className='quiz-box-main'>
                {
                    quizData?.questions?.length >0?(
                quizData.questions.map((q,index) =>(
                <div className='quiz-box' key={index}>
                    <div className='question'>
                        {/* <FaQuestionCircle size={30} color="#555" /> */}
                        <h3>{index+1}.</h3>
                        <p>{q.question}</p>
                    </div>
                    <div>
                        <ul>
                            {
                                q.options.map((opt,i) => (
                                    <div className='option-box'>
                                    <input type='checkbox' onClick={() => setOpen(true)}></input>
                                    <li key={i}>{opt}</li>
                                    </div>
                                ))
                            }
                        </ul>
                        
                    </div>
                </div>
                ))):(<p>No Questions available</p>

                )}
            </div>
        
        </div>
        {open &&(
            <>
                <div className='answer-box'>
                    <h1>hey</h1>
                    <h3>hello;;;;;;;;;;;;;;;;;;;;;;;;</h3>
                </div>
            </>
        )

        }
    </>
  )
}

export default QuizPage
