import './App.css';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import SurveyPage from './pages/SurveyPage'
import LandingPage from './pages/LandingPage'
import SurveyCompletePage from './pages/SurveyCompletePage'
import EmailCompletePage from './pages/EmailCompletePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [surveyResult, setSurveyResult] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={ <SurveyPage setSurveyResult={setSurveyResult} /> } />
        <Route path="/complete" element={ <SurveyCompletePage setSurveyResult={setSurveyResult} surveyResult={surveyResult}/> } />
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/emailcomplete" element={ <EmailCompletePage /> } />
      </Routes>
    </div>
  )
}

export default App;
