import React from 'react'
import ProjectsSlideshow from './ProjectsSlideshow'
import { Header } from 'semantic-ui-react'


  class Projects extends React.Component {
    render() {
      return(
        <div className="container">
          <Header dividing inverted size="huge" className="item">Projects</Header>
          <ProjectsSlideshow />
        </div>
      )
    }
  }

export default Projects
