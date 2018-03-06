import React from 'react';
import { Icon } from 'semantic-ui-react'

class ProjectsSlideshow extends React.Component {

  state = {
    images: [
      {
        path: 'projects_rentair.png',
        caption: 'Final Project'
      },
      {
        path: 'projects_watch_or_nah.png',
        caption: 'Mod 3 Project'
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
      <div id="slideWrapper">
        <img src="https://cdn4.iconfinder.com/data/icons/browser-ui-small-size-optimized-set/154/arrow-left-navigation-browser-512.png" className="arrowR" onClick={() => this.handleClick('prev')} />
        <div id="aboutSlideshow">
          <img src={require('../media/' + image.path)} alt={image.path} size='large' id="slide"/>
        </div>
        <img src="https://cdn4.iconfinder.com/data/icons/browser-ui-small-size-optimized-set/154/arrow-right-navigation-browser-512.png" className="arrow" onClick={() => this.handleClick('next')} />
        <p>{caption}</p>
      </div>
    )
  }
}

export default ProjectsSlideshow
