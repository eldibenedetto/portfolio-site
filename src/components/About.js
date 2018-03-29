import React from 'react'
import AboutSlideshow from './AboutSlideshow'
import { Header } from 'semantic-ui-react'

  class About extends React.Component {
    render() {
      return(
        <div className="container">
          <Header dividing inverted size="huge" className="item">About</Header>
          <AboutSlideshow />
        </div>
      )
    }
  }

export default About
