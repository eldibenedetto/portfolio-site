import React from 'react'
import AboutSlideshow from './AboutSlideshow'
import { Icon } from 'semantic-ui-react'

  class About extends React.Component {
    render() {
      return(
        <div>
          <h1>About</h1>
          <p>Hi, I'm Eugene and I am a full stack web developer. </p>
          <AboutSlideshow />
        </div>
      )
    }
  }

export default About
