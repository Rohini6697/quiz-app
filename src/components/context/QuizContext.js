import { createContext, useContext, useEffect, useState } from "react";



const QuizContext = createContext();


export const QuizProvider = ({children}) => {
    const storedData = JSON.parse(localStorage.getItem('quizData'))
    const [quizData,setQuizData] = useState({
        category:null,
        difficulty: null,
        questions: []
    })


    useEffect(() => {
        localStorage.setItem('quizData',JSON.stringify(quizData))
    },[quizData])

    return(
        <QuizContext.Provider value = {{quizData,setQuizData}}>
            {children}
        </QuizContext.Provider>
    )
}
export const useQuiz = () => useContext(QuizContext)