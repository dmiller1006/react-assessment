import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import controlPic from '../images/control.png'
import patiencePic from '../images/patience.png'
import peoplePic from '../images/people.png'
import rulesPic from '../images/rules.png'


const LandingPage = () => {
    const navigate = useNavigate()

    // scroll to top of window on rerender
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const handleBeginClick = () => {
        navigate('/main')
    }
  return (
    <div className="page-wrapper">
      <div>
        <Header />
      </div>
      <div className="landing-page-container">
        <Card className="landing-card">
          <div className="icon-container">
            <Card.Img variant="top" src={controlPic} className='result-image'/>
            <Card.Img variant="top" src={patiencePic} className='result-image'/>
            <Card.Img variant="top" src={peoplePic} className='result-image'/>
            <Card.Img variant="top" src={rulesPic} className='result-image'/>
          </div>
          <Card.Body>
            <Card.Title style={{fontWeight: '800'}}>Free Talent Assessment</Card.Title>
            <Card.Text>
                  LearnKey is pleased to offer a free talent assessment that enables you to learn about your natural talents.<br />
            </Card.Text>
            <Card.Text>
                  It takes less than 3 minutes!
            </Card.Text>
            <Button variant="success" onClick={handleBeginClick}>Begin Assessment!</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage