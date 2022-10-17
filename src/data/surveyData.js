export const surveyJSON = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage1",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": 100,
       "text": "All the time"
      },
      {
       "value": 75,
       "text": "Most of the time"
      },
      {
       "value": 50,
       "text": "Sometimes"
      },
      {
       "value": 25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "controlAdd1",
       "text": "In most situations, I like taking charge."
      },
      {
       "value": "controlAdd2",
       "text": "When I play games, winning is most important."
      },
      {
       "value": "controlAdd3",
       "text": "When something is broken, I immediately think of how to fix it."
      },
      {
       "value": "controlAdd4",
       "text": "In a disagreement, I will confront the other person."
      },
      {
       "value": "controlAdd5",
       "text": "I like to tell people what to do."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage2",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": 100,
       "text": "All the time"
      },
      {
       "value": 75,
       "text": "Most of the time"
      },
      {
       "value": 50,
       "text": "Sometimes"
      },
      {
       "value": 25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "peopleAdd1",
       "text": "I enjoy talking in most situations."
      },
      {
       "value": "peopleAdd2",
       "text": "Pleasing people is important to me."
      },
      {
       "value": "peopleAdd3",
       "text": "I am more of an optimist than a pessimist."
      },
      {
       "value": "peopleAdd4",
       "text": "I enjoy persuading others."
      },
      {
       "value": "peopleAdd5",
       "text": "Being around people motivates me."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage3",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": 100,
       "text": "All the time"
      },
      {
       "value": 75,
       "text": "Most of the time"
      },
      {
       "value": 50,
       "text": "Sometimes"
      },
      {
       "value": 25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "patienceAdd1",
       "text": "I prefer to make decisions with others’ input."
      },
      {
       "value": "patienceAdd2",
       "text": "I like to do one thing at a time."
      },
      {
       "value": "patienceAdd3",
       "text": "I prefer routine in my day-to-day tasks."
      },
      {
       "value": "patienceAdd4",
       "text": "I feel I am an easygoing person."
      },
      {
       "value": "patienceAdd5",
       "text": "I dislike conflict or friction with people."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage4",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": 100,
       "text": "All the time"
      },
      {
       "value": 75,
       "text": "Most of the time"
      },
      {
       "value": 50,
       "text": "Sometimes"
      },
      {
       "value": 25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "rulesAdd1",
       "text": "I prefer doing things right the first time."
      },
      {
       "value": "rulesAdd2",
       "text": "I enjoy following rules."
      },
      {
       "value": "rulesAdd3",
       "text": "Before moving to the next step, I need all the information."
      },
      {
       "value": "rulesAdd4",
       "text": "Being accurate is very important to me."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage5",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": -100,
       "text": "All the time"
      },
      {
       "value": -75,
       "text": "Most of the time"
      },
      {
       "value": -50,
       "text": "Sometimes"
      },
      {
       "value": -25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "controlSub1",
       "text": "I like following directions."
      },
      {
       "value": "controlSub2",
       "text": "When in groups, I tend to try to please others."
      },
      {
       "value": "controlSub3",
       "text": "In most situations, I feel I am not competitive."
      },
      {
       "value": "controlSub4",
       "text": "I feel I am helpful whenever I can be."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage6",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": -100,
       "text": "All the time"
      },
      {
       "value": -75,
       "text": "Most of the time"
      },
      {
       "value": -50,
       "text": "Sometimes"
      },
      {
       "value": -25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "peopleSub1",
       "text": "I tend to be shy."
      },
      {
       "value": "peopleSub2",
       "text": "I must trust others before I share private information."
      },
      {
       "value": "peopleSub3",
       "text": "I try to think before I speak."
      },
      {
       "value": "peopleSub4",
       "text": "I am selective with my friends."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page7",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage7",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": -100,
       "text": "All the time"
      },
      {
       "value": -75,
       "text": "Most of the time"
      },
      {
       "value": -50,
       "text": "Sometimes"
      },
      {
       "value": -25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "patienceSub1",
       "text": "I like doing everything fast."
      },
      {
       "value": "patienceSub2",
       "text": "I like change."
      },
      {
       "value": "patienceSub3",
       "text": "I enjoy being active."
      },
      {
       "value": "patienceSub4",
       "text": "When things move slowly, I get impatient."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  {
   "name": "page8",
   "elements": [
    {
     "type": "matrix",
     "name": "questionPage8",
     "title": "Select how often each statement applies to you:",
     "hideNumber": true,
     "isRequired": true,
     "validators": [
      {
       "type": "expression"
      }
     ],
     "columns": [
      {
       "value": -100,
       "text": "All the time"
      },
      {
       "value": -75,
       "text": "Most of the time"
      },
      {
       "value": -50,
       "text": "Sometimes"
      },
      {
       "value": -25,
       "text": "Not very often"
      },
      {
       "value": 0,
       "text": "Never"
      }
     ],
     "rows": [
      {
       "value": "rulesSub1",
       "text": "I enjoy being creative and thinking out of the box."
      },
      {
       "value": "rulesSub2",
       "text": "I am more visionary than detail oriented."
      },
      {
       "value": "rulesSub3",
       "text": "I tend to be free-spirited and go with the flow."
      },
      {
       "value": "rulesSub4",
       "text": "Rules annoy me."
      },
      {
       "value": "rulesAdd5",
       "text": "I often say what I am thinking."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  }
 ],
 "showPageTitles": false,
 "showCompletedPage": false,
 "showProgressBar": "top"
}