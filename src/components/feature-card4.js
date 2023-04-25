import React from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div className={`feature-card4-feature-card ${props.rootClassName} `}>
      <span className="feature-card4-text">{props.description}</span>
    </div>
  )
}

FeatureCard4.defaultProps = {
  rootClassName: '',
  description:
    "AT ROKU, WE UNDERSTAND THE SIGNIFICANCE OF SELF-EXPRESSION IN OUR DAILY LIVES. AS SOCIAL MEDIA CONTINUES TO EXPAND IN THE MODERN WORLD, WOULDN'T IT BE GREAT TO TURN OUR PASSION INTO A CAREER? ROKU EMBODIES A LIFESTYLE THAT ENCOURAGES EVERYONE TO LIVE LIFE ON THEIR OWN TERMS, PROVIDING OPPORTUNITIES TO DO SO.",
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
