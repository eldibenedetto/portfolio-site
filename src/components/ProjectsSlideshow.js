import React from 'react';
import { Icon } from 'semantic-ui-react'

class ProjectsSlideshow extends React.Component {

  state = {
    images: [
      {
        path: 'projects_rentair.png',
        caption: "Flatiron School Final Project: Built a React/Redux Single Page Application with a Rails API and Postgres Database in 3 weeks. The application is essentially a clone of the Turo website, a web application that allows users to rent their cars to each other."
      },
      {
        path: 'projects_watch_or_nah.png',
        caption: "Flatiron School Javascript Module Project: Built a Functional Vanilla JS Single Page Application with a Rails API and Postgres Database. The application loads upcomming movies trailers from the TMDB API and a user can choose whether or not they would watch it, by dragging the trailer on the screen, similar to Tinder's swiping feature."
      }
    ],
    photoIndex: 0
  }

  handleClick = command => {
    const  L = this.state.images.length - 1
    let { photoIndex } = this.state
    if (command === 'next') {
      photoIndex = photoIndex === L ? 0 : photoIndex+=1
      this.setState({ photoIndex })
    } else {
      photoIndex = photoIndex === 0 ? L : photoIndex-=1
      this.setState({ photoIndex })
    }
  }

  render() {
    let { images, photoIndex } = this.state
    let image = images[photoIndex]
    let caption = images[photoIndex].caption
    return(
      <div className="item">
        <div className="slideShowContainer">
          <div id="slideWrapper">
            <Icon inverted name="arrow left" link size="huge" onClick={() => this.handleClick('prev')} />
            <div id="aboutSlideshow" style={{marginBottom: "2%"}}>
              <img src={require('../media/' + image.path)} alt={image.path} size='large' id="slide"/>
            </div>
            <Icon inverted name="arrow right" link size="huge" onClick={() => this.handleClick('next')} />
          </div>
          <div className="captions">
            <p>{caption}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsSlideshow
