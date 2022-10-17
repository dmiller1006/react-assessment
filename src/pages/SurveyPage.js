import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom"
import { Survey } from 'survey-react-ui';
import { surveyJSON } from '../data/surveyData'
import Footer from '../components/Footer'
import Header from '../components/Header'

// survey V2 theme
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
StylesManager.applyTheme("defaultV2");


const SurveyComponent = ({ surveyResult, setSurveyResult }) => {
  const navigate = useNavigate();

  const survey = new Model(surveyJSON);

  // scroll to top of window on rerender
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const handleSurveySubmit = (data) => {
    let controlScore = 0
    let peopleScore = 0
    let patienceScore = 0
    let rulesScore = 0
    

    const getQuestionType = (txt) => {
      if (txt.includes("Sub")) {
        return txt.slice(0, txt.indexOf("S"))
      }
      return txt.slice(0, txt.indexOf("A"))
    }

    // parse survey results
    let surveyResultsJSON = JSON.parse(data);

    // loop pages of survey
    for (const page in surveyResultsJSON) {
      const pageResults = surveyResultsJSON[page]

      // loop questions on each page
      for (const questionId in pageResults) {
        const questionValue = pageResults[questionId]
        const questionType = getQuestionType(questionId)


        // switch case to handle question types
        switch (questionType) {
          case "control":
            controlScore += questionValue
            break;
          case "people":
            peopleScore += questionValue
            break;
          case "patience":
            patienceScore += questionValue
            break;
          case "rules":
            rulesScore += questionValue
            break;
          default:
            alert('Survey Unsuccessful.')
        }
      }
    }

    // create result array
    let surveyResultValues = [
      ["control", controlScore],
      ["people", peopleScore],
      ["patience", patienceScore],
      ["rules", rulesScore]
    ]

    // get highest score value
    let scoreArray = [controlScore, peopleScore, patienceScore, rulesScore]
    let highestScore = scoreArray.sort((a,b) => a - b)[scoreArray.length - 1]

    // loop surveyResultValues and push matches to categoriesMatched before sending that array to surveyResults state (App.js))
    let categoriesMatched = []

    for (let category in surveyResultValues) {
      if (surveyResultValues[category][1] === highestScore) {
        categoriesMatched.push(surveyResultValues[category][0])
      }
    }

    // set state in App.js component
    setSurveyResult(categoriesMatched)

    // navigate to complete page
    navigate('/complete')
  }

  const surveyComplete = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    handleSurveySubmit(results);
    // eslint-disable-next-line
  }, []);

  // handle survey submission
  survey.onComplete.add(surveyComplete);

  return (
    <div className="page-wrapper">
      <div className="survey-main-container">
        <div>
          <Header />
        </div>
        <div id="survey-element-container">
            <Survey model={survey} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default SurveyComponent