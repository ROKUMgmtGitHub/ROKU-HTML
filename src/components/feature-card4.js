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
    'THIS IS TEXT. THIS IS TEXT. THIS IS TEXT. THIS IS TEXT. THIS IS TEXT. THIS IS TEXT.THIS IS TEXT. THIS IS TEXT.THIS IS TEXT. THIS IS TEXT. THIS IS TEXT.THIS IS TEXT.',
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
