import Card from 'react-bootstrap/Card'
import React from 'react'
import controlPic from '../images/control.png'
import patiencePic from '../images/patience.png'
import peoplePic from '../images/people.png'
import rulesPic from '../images/rules.png'


const Result = ({category, categoryDescription}) => {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const getImage = () => {
    switch (category) {
      case 'control':
        return controlPic;
      case 'patience':
        return patiencePic;
      case 'rules':
        return rulesPic;
      case 'people':
        return peoplePic;
      default:
        return ''
    }
  }

  

  return (
    <div style={{margin: '0px auto'}}>
    <Card className="result-card" >
      <Card.Body>
        <Card.Title id="cardTitle" style={{textAlign: 'center'}}>{capitalizeFirstLetter(category)}</Card.Title>
        <Card.Text>
        <Card.Img variant="top" src={getImage()} className='result-image'/>
          {categoryDescription}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Result