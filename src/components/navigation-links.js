import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.home}</span>
      <span className="navigation-links-text1">{props.journey}</span>
      <span className="navigation-links-text2">{props.promise}</span>
      <span className="navigation-links-text3">{props.services}</span>
      <span className="navigation-links-text4">{props.vision}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  home: 'HOME',
  services: 'SERVICES',
  vision: 'VISION',
  promise: 'PROMISE',
  rootClassName: '',
  journey: 'JOURNEY',
}

NavigationLinks.propTypes = {
  home: PropTypes.string,
  services: PropTypes.string,
  vision: PropTypes.string,
  promise: PropTypes.string,
  rootClassName: PropTypes.string,
  journey: PropTypes.string,
}

export default NavigationLinks
