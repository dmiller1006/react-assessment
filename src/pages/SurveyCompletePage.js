import React from 'react'
import { useEffect } from 'react'
import { categoryDescriptionJSON } from '../data/categoryDescription';
import 'survey-core/defaultV2.min.css';
// import ReCAPTCHA from "react-google-recaptcha";
import Header from '../components/Header'
import Result from '../components/Result'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import controlPic from '../images/control.png'
import patiencePic from '../images/patience.png'
import peoplePic from '../images/people.png'
import rulesPic from '../images/rules.png'


const SurveyComplete = ({surveyResult}) => {
  // const recaptchaRef = React.useRef();
  const navigate = useNavigate();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // scroll to top of window on rerender
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // create card components
  const renderCards = () => {
    return surveyResult.map((category, idx) => {
      return <Result key={idx} category={category} categoryDescription={categoryDescriptionJSON[category]} />
    })
  }

  // recaptcha documentation https://www.npmjs.com/package/react-google-recaptcha >> see "Additionally, you can use the executeAsync method to use a promise based approach."
  const onSubmitWithReCAPTCHA = (e) => {
    e.preventDefault()
    // const token = await recaptchaRef.current.executeAsync();
  
    const data = {
        service_id: 'service_8k2un5v',
        template_id: 'template_lou6ncc',
        user_id: 'kgZ21m-5f9j9N_7UE',
        template_params: {
            // 'g-recaptcha-response': token,
            'to_name': e.target[0].value,
            'user_email': e.target[1].value,
            'talent': capitalizeFirstLetter(surveyResult[0]),
            'talentdescription': categoryDescriptionJSON[surveyResult[0]]
        }
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', requestOptions)
        .then(navigate('/emailcomplete'))
        .catch((err) => console.log(err))
  }

  // navigate back to root URL
  const restartSurvey = () => {
    navigate('/')
  }

  return (
    <div className="page-wrapper">
      <Header />
      <div className='result-container'>
        <div className="result-header-container">
          <p className='result-header-text'>
            <b>Congratulations</b> for completing your free talent assessment!
          </p>
          <p>
            Enter your email below, and we will send you your results.
          </p>
        </div>
        <div className="result-card-container">
          {renderCards()}
          <div className="result-card card">
            <Form onSubmit={(e) => {onSubmitWithReCAPTCHA(e)}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" style={{fontSize: '11px'}}>
                    Your personal information will not be stored or collected
                    </Form.Text>
                </Form.Group>
                <div className="result-button-container">
                    <Button className="result-page-button" variant="primary" type="submit">Send Results</Button>
                    <Button className="result-page-button" variant="warning" onClick={() => restartSurvey()}>Retake Survey</Button>
                </div>
                {/* <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LdA_DYiAAAAAKuZT-picsFIZg4BgeRtJ8DD1QyL"
                /> */}
            </Form>
          </div>
      <div className="landing-page-container">
        <Card className="landing-card" style={{marginTop: '0px'}}>
          <div className="icon-container">
            <Card.Img variant="top" src={controlPic} className='result-image'/>
            <Card.Img variant="top" src={patiencePic} className='result-image'/>
            <Card.Img variant="top" src={peoplePic} className='result-image'/>
            <Card.Img variant="top" src={rulesPic} className='result-image'/>
          </div>
          <Card.Body>
            <Card.Text style={{maxWidth: '85%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
              We hope you enjoyed learning some insight about your natural talents. If you or your organization is interested in learning more on how to leverage those talents in the work place then visit <a href="https://knowyourtalents.com/" target="_blank" rel="noreferrer">Know Your Talents</a>.
            </Card.Text>
            <Card.Text style={{maxWidth: '85%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
              If you would like to gain employability skills that lead to employment visit <a href="https://www.learnkey.com/" target="_blank" rel="noreferrer">LearnKey.com</a>.
            </Card.Text>
            <Button variant="success" href="https://www.learnkey.com/" target="_blank">Go To LearnKey.com</Button>
          </Card.Body>
        </Card>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyComplete