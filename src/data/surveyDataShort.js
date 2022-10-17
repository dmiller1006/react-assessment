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
       "value": "peopleAdd1",
       "text": "I enjoy talking in most situations."
      },
      {
       "value": "rulesAdd2",
       "text": "Pleasing people is important to me."
      },
      {
       "value": "controlAdd1",
       "text": "I enjoy talking in most situations."
      },
      {
       "value": "patienceAdd2",
       "text": "Pleasing people is important to me."
      }
     ],
     "isAllRowRequired": true
    }
   ]
  },
  //   {
  //  "name": "page1",
  //  "elements": [
  //   {
  //    "type": "matrix",
  //    "name": "questionPage1",
  //    "title": "Select how often each statement applies to you",
  //    "hideNumber": true,
  //    "validators": [
  //     {
  //      "type": "expression"
  //     }
  //    ],
  //    "columns": [
  //     {
  //      "value": 100,
  //      "text": "All the time"
  //     },
  //     {
  //      "value": 75,
  //      "text": "Most of the time"
  //     },
  //     {
  //      "value": 50,
  //      "text": "Sometimes"
  //     },
  //     {
  //      "value": 25,
  //      "text": "Not very often"
  //     },
  //     {
  //      "value": 0,
  //      "text": "Never"
  //     }
  //    ],
  //    "rows": [
  //     {
  //      "value": "controlAdd1",
  //      "text": "In most situations, I like taking charge."
  //     },
  //     {
  //      "value": "controlAdd2",
  //      "text": "When I play games, winning is most important."
  //     },
  //     {
  //      "value": "controlAdd3",
  //      "text": "When something is broken, I immediately think of how to fix it."
  //     },
  //     {
  //      "value": "controlAdd4",
  //      "text": "In disagreement, I will confront the person."
  //     },
  //     {
  //      "value": "controlAdd5",
  //      "text": "I like to tell people what to do."
  //     }
  //    ],
  //    "isAllRowRequired": false
  //   }
  //  ]
  // }
 ],
 "showPageTitles": false,
 "showCompletedPage": false,
 "showProgressBar": "top"
}