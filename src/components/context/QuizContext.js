import { createContext, useContext, useEffect, useState } from "react";



const QuizContext = createContext();


export const QuizProvider = ({children}) => {





    
let storedData = null;
try {
  const item = localStorage.getItem('quizData');
  if (item) {
    storedData = JSON.parse(item);
  }
} catch (error) {
  console.error("Invalid quizData in localStorage:", error);
  localStorage.removeItem('quizData'); // clear corrupted data
}

    


    const [quizData,setQuizData] = useState(
        storedData ||{
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