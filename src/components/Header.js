import React from 'react'
import logo from '../images/LKlogo-white.png'
import smallLogo from '../images/lk-logo-small.png'

const Header = () => {

    const addMaxWidth = {
    maxWidth: "calc(((100% - 5px) - 2em) - 300px)"
  }

  const objectFit = {
    objectFit: "contain"
  }

  const addPadding = {
    padding: "24px",
    boxShadow: "0px 2px 0px #207fbe"
  }

  return (
    <div className="header-container">
      <div className="sd-container-modern__title">
          <div className="sd-title sd-container-modern__title" style={addPadding}>
              <div className="sd-header__text" style={addMaxWidth}>
                  {/* <h3 className="sd-title" aria-label="LearnKey - eLearningPlanner" style={marginZero}>
                      <span className="sv-string-viewer">LearnKey - eLearningPlanner</span>
                  </h3>
                  <h5 className="sd-description" style={marginZero}>
                      <span className="sv-string-viewer">Take your free employability talent assessment!</span>
                  </h5> */}
              </div>
              <div className="sd-logo sv-logo--right">
                <a href="https://www.learnkey.com" target="_blank" rel="noreferrer"><img className="sd-logo__image" src={logo} alt="LearnKey - Talent Assessment" width="300px" height="200px" style={objectFit} /></a>
              </div>
          </div>
      </div>
      <div className="mobile-header-container">
        <h3 className="sd-title mobile-header-text" aria-label="LearnKey - Talent Assessment">
            <span className="sv-string-viewer">LearnKey - Talent Assessment</span>
        </h3>
        <a href="https://www.learnkey.com/" target="_blank" rel="noreferrer"><img src={smallLogo} alt="" height="50px" className="small-mobile-image"/></a>
      </div>
    </div>
  )
}

export default Header