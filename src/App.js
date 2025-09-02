// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/essentials/Header';
import QuizPage from './components/pages/QuizPage';
import { QuizProvider } from './components/context/QuizContext';


function App() {
  return (
    <div className="App">
      <QuizProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path='/quiz' element = {<QuizPage/>}/>
        </Routes>
      </BrowserRouter>
      </QuizProvider>
    
      
    </div>
  );
}

export default App;
