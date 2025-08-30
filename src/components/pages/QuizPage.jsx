import React from 'react'
import { RxCross2 } from "react-icons/rx"; 
import { FaQuestionCircle } from "react-icons/fa";

import '../../styles/pages/QuizPage.css'
import { useNavigate } from 'react-router-dom';


const QuizPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='quiz-top'>
            <h2>Level :</h2>
            <RxCross2 size={24} onClick={() => navigate(-1)}/>
        </div>
        <div className='quiz-box-main'>
            <div className='quiz-box'>
                <div className='question'>
                    <FaQuestionCircle size={30} color="#555" />
                    <p>helo</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default QuizPage
