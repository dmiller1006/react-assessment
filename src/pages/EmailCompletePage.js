import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import controlPic from '../images/control.png'
import patiencePic from '../images/patience.png'
import peoplePic from '../images/people.png'
import rulesPic from '../images/rules.png'


const EmailCompletePage = () => {
    // scroll to top of window on rerender
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="page-wrapper">
      <div>
        <Header />
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
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default EmailCompletePage