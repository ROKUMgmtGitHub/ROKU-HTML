import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>ROKU</title>
        <meta property="og:title" content="ROKU" />
      </Helmet>
      <header data-role="Header" className="landing-page-header">
        <div className="landing-page-container1">
          <img
            alt="logo"
            src="/playground_assets/newwebsitelogo912x74815728-up3f-1500h.png"
            className="landing-page-image"
          />
          <div className="landing-page-nav">
            <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          </div>
        </div>
        <div className="landing-page-btn-group">
          <button className="landing-page-button button">APPLY NOW</button>
        </div>
        <div data-role="BurgerMenu" className="landing-page-burger-menu">
          <svg viewBox="0 0 1024 1024" className="landing-page-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="landing-page-mobile-menu">
          <nav className="landing-page-nav1">
            <div className="landing-page-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="landing-page-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="landing-page-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="landing-page-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="landing-page-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="landing-page-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="landing-page-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="landing-page-hero">
        <div className="landing-page-btn-group1">
          <button className="landing-page-button1 button">APPLY NOW</button>
        </div>
        <img
          alt="image"
          src="/playground_assets/new%20website%20logo%20%5B912x748%5D-1500h.png"
          className="landing-page-image2"
        />
        <div className="landing-page-container3">
          <h1 className="landing-page-text">
            NO. 1 ONLYFANS MARKETING SPECIALISTS
          </h1>
          <h1 className="landing-page-text01">
            15+ YEARS IN DIGITAL ADVERTISMENT
          </h1>
          <h1 className="landing-page-text02">
            $18M+ MILLION IN REVENUE GENERATED
          </h1>
          <h1 className="landing-page-text03">
            MULTIPLE TOP 0.1% SIGNED CREATORS
          </h1>
        </div>
      </div>
      <div className="landing-page-hero1">
        <div className="landing-page-container4">
          <h1 className="landing-page-text04">
            <span className="landing-page-text05">YOUR JOURNEY</span>
            <br></br>
            <span>STARTS HERE</span>
            <br></br>
          </h1>
        </div>
        <img
          alt="image"
          src="/playground_assets/ee6ebbfdbb997c9cd39643de8860989e-1500w.jpg"
          className="landing-page-image3"
        />
        <div className="landing-page-container5">
          <h1 className="landing-page-text09">
            ROKU MANAGEMENT MAKES CONTENT CREATION LUCRATIVE
          </h1>
          <span className="landing-page-text10">
            <span>
              OUR TEAM OF HIGHLY SKILLED PROFESSIONALS, COMBINED WITH OUR
              EFFECTIVE MARKETING STRATEGIES, PROVIDE YOU WITH THE OPPORTUNITY
              TO UNLEASH YOUR CREATIVITY TO ITS FULLEST POTENTIAL
            </span>
            <br></br>
          </span>
          <button className="landing-page-button2 button">APPLY NOW</button>
        </div>
      </div>
      <div className="landing-page-features">
        <h1 className="landing-page-text13">THE ROKU PROMISE</h1>
        <div className="landing-page-container6">
          <span className="landing-page-text14">
            <span>FREEDOM</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/group%201-500h.png"
            className="landing-page-image4"
          />
          <span className="landing-page-text17">
            <span>MONEY</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/group%202-500h.png"
            className="landing-page-image5"
          />
          <span className="landing-page-text20">
            <span>TIME</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/group%203-500h.png"
            className="landing-page-image6"
          />
          <span className="landing-page-text23">
            <span className="landing-page-text24">
              AT ROKU, WE UNDERSTAND THE SIGNIFICANCE OF SELF-EXPRESSION IN OUR
              DAILY LIVES. AS SOCIAL MEDIA CONTINUES TO EXPAND IN THE MODERN
              WORLD, WOULDN&apos;T IT BE GREAT TO TURN OUR PASSION INTO A
              CAREER?
            </span>
            <br className="landing-page-text25"></br>
            <br className="landing-page-text26"></br>
            <span className="landing-page-text27">
              ROKU EMBODIES A LIFESTYLE THAT ENCOURAGES EVERYONE TO LIVE LIFE ON
              THEIR OWN TERMS, PROVIDING OPPORTUNITIES TO DO SO.
            </span>
            <br className="landing-page-text28"></br>
            <br className="landing-page-text29"></br>
            <span className="landing-page-text30">
              WE MAKE YOU
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="landing-page-text31">MONEY</span>
            <span className="landing-page-text32">.</span>
            <br className="landing-page-text33"></br>
            <span className="landing-page-text34">
              YOU CAN NOW USE YOUR
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="landing-page-text35">TIME</span>
            <span className="landing-page-text36">.</span>
            <br className="landing-page-text37"></br>
            <span className="landing-page-text38">
              TO LIVE LIFE FULL OF
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="landing-page-text39">FREEDOM</span>
            <span className="landing-page-text40">.</span>
            <br className="landing-page-text41"></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
